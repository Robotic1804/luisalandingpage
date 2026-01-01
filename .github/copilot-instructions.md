 Instructions - Luisa Landing Page

This is a modern Angular 20.3 SSR landing page for health/wellness product affiliate marketing.

## Architecture Overview

**Core Structure:**
- **Main App**: Single-route landing page with embedded sections (not routed components)  
- **SSR Enabled**: Uses Angular SSR with Express server (`src/server.ts`)
- **Zoneless**: Uses `provideZonelessChangeDetection()` - avoid Zone.js patterns
- **Standalone Components**: All components use standalone: true, no NgModule declarations

**Key Components Pattern:**
```typescript
// All components follow this standalone pattern
@Component({
  selector: 'app-example',
  imports: [CommonModule, /* specific imports */],
  templateUrl: './example.component.html',
  standalone: true
})
```

## Development Workflow

**Start Development:**
```bash
ng serve          # Starts on :4200 with SSR
```

**SSR Production:**
```bash 
ng build                          # Builds for SSR
npm run serve:ssr:luisalandingpage # Serves SSR build
```

**Styling:** Pure TailwindCSS v4 - no custom CSS classes, use utility-first approach

## Project-Specific Patterns

**Page Architecture:**
- `HomeComponent` renders all sections inline (About, Products, Testimonials)
- `/go` route for affiliate redirects with tracking
- Components communicate via `@Input()/@Output()` or direct template bindings

**Modal Management:**
```typescript
// Modals are toggled via boolean flags in HomeComponent
showLeadMagnet = false;     // Lead magnet modal
showQuiz = false;           // Quiz modal  
quizStep = 0;               // Quiz step tracking
```

**WhatsApp Widget:**
- Configurable contacts in `whatsapp-widget.ts`
- Uses floating action button pattern with expandable contact list

**Analytics Integration:**
- `TrackingService` handles affiliate click tracking via gtag
- Ready for Google Analytics 4 events

## Key Files to Understand

**Component Structure:**
- `src/app/app.ts` - Root component with all section imports
- `src/app/pages/home/home.component.ts` - Main landing page with modal state

**Configuration:**
- `src/app/app.config.ts` - Zoneless + SSR configuration  
- `src/server.ts` - Express SSR server setup
- `package.json` - Note the SSR serve script

**Styling:**
- `src/styles.css` - Single TailwindCSS import
- All components use utility classes, no custom CSS

## External Dependencies

- **Lucide Angular**: Icon components (already installed)
- **TailwindCSS 4.x**: Utility-first styling framework
- **Express**: SSR server runtime

## Component Communication

Components are tightly coupled through the HomeComponent template. Modals and widgets receive props directly:

```html
<app-lead-magnet-modal 
  [isVisible]="showLeadMagnet"
  (close)="showLeadMagnet = false">
</app-lead-magnet-modal>
```

When adding new interactive elements, follow this pattern rather than using services for state management.