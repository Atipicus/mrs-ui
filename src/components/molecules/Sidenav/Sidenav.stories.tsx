/**
 * Sidenav Component Stories
 *
 * @figma https://figma.com/design/pWR8HIewAt87ZioeOSMoWM/MRS---Material-UI?node-id=13099-16347
 */

import type { Meta, StoryObj } from '@storybook/react';
import { Box, Stack, Typography } from '@mui/material';
import { Sidenav } from './Sidenav';
import type { SidenavNavigationItem } from './Sidenav.types';

const meta: Meta<typeof Sidenav> = {
  title: 'Molecules/Sidenav',
  component: Sidenav,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
Side navigation component for the MRS Design System.
Supports two variants: 'default' (256px) with full labels and 'slim' (72px) with icons only.

## Features
- Two variants: default (with labels) and slim (icons only)
- Logo section with MRS branding
- Action button (Button in default, IconButton in slim)
- Navigation items with Material Symbols icons
- Group headers for organizing items
- Selected/active state highlighting
- Tooltips in slim mode for accessibility
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'slim'],
      description: 'Sidenav variant - affects width and label visibility',
    },
    logo: {
      control: 'boolean',
      description: 'Whether to show the logo',
    },
    showActionButton: {
      control: 'boolean',
      description: 'Whether to show the action button',
    },
    height: {
      control: 'text',
      description: 'Height of the sidenav',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Sidenav>;

// Default navigation items matching Figma design
const defaultItems: SidenavNavigationItem[] = [
  { id: 'home', label: 'Inicio', icon: 'home', selected: true },
  { id: 'appointments', label: 'Citas', icon: 'event' },
  {
    header: 'Mi salud',
    items: [
      { id: 'orders', label: 'Órdenes', icon: 'order_approve' },
      { id: 'prescriptions', label: 'Recetas', icon: 'medication' },
      { id: 'results', label: 'Resultados', icon: 'biotech' },
      { id: 'surgeries', label: 'Cirugías', icon: 'local_hospital' },
      { id: 'history', label: 'Historial', icon: 'lab_profile' },
      { id: 'preventive', label: 'Salud preventiva', icon: 'heart_check' },
    ],
  },
  {
    header: 'Precios y coberturas',
    items: [
      { id: 'quoter', label: 'Cotizador', icon: 'paid' },
      { id: 'plans', label: 'Planes y seguros', icon: 'health_and_safety' },
    ],
  },
  {
    header: 'Cuenta',
    items: [{ id: 'profile', label: 'Mis datos', icon: 'account_circle' }],
  },
];

/**
 * Default variant (256px width) with full navigation
 */
export const Default: Story = {
  args: {
    variant: 'default',
    logo: true,
    showActionButton: true,
    items: defaultItems,
    actionButton: {
      label: 'Agendar',
      icon: 'add',
      onClick: () => console.log('Agendar clicked'),
    },
    height: 800,
  },
};

/**
 * Slim variant (72px width) with icons only
 */
export const Slim: Story = {
  args: {
    variant: 'slim',
    logo: true,
    showActionButton: true,
    items: defaultItems,
    actionButton: {
      label: 'Agendar',
      icon: 'add',
      onClick: () => console.log('Agendar clicked'),
    },
    height: 800,
  },
};

/**
 * Side by side comparison of both variants
 */
export const VariantsComparison: Story = {
  render: () => (
    <Stack direction="row" spacing={4} sx={{ p: 2, bgcolor: 'grey.100' }}>
      <Box>
        <Typography variant="subtitle2" sx={{ mb: 1 }}>
          Default (256px)
        </Typography>
        <Sidenav
          variant="default"
          items={defaultItems}
          actionButton={{
            label: 'Agendar',
            icon: 'add',
          }}
          height={700}
        />
      </Box>
      <Box>
        <Typography variant="subtitle2" sx={{ mb: 1 }}>
          Slim (72px)
        </Typography>
        <Sidenav
          variant="slim"
          items={defaultItems}
          actionButton={{
            label: 'Agendar',
            icon: 'add',
          }}
          height={700}
        />
      </Box>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comparison of default and slim variants side by side.',
      },
    },
  },
};

/**
 * Without logo
 */
export const WithoutLogo: Story = {
  args: {
    variant: 'default',
    logo: false,
    showActionButton: true,
    items: defaultItems,
    actionButton: {
      label: 'Agendar',
      icon: 'add',
    },
    height: 600,
  },
  parameters: {
    docs: {
      description: {
        story: 'Sidenav without the logo section.',
      },
    },
  },
};

/**
 * Without action button
 */
export const WithoutActionButton: Story = {
  args: {
    variant: 'default',
    logo: true,
    showActionButton: false,
    items: defaultItems,
    height: 600,
  },
  parameters: {
    docs: {
      description: {
        story: 'Sidenav without the action button.',
      },
    },
  },
};

/**
 * Simple items only (no groups)
 */
export const SimpleItems: Story = {
  args: {
    variant: 'default',
    logo: true,
    showActionButton: true,
    items: [
      { id: 'home', label: 'Inicio', icon: 'home', selected: true },
      { id: 'calendar', label: 'Calendario', icon: 'calendar_today' },
      { id: 'messages', label: 'Mensajes', icon: 'mail' },
      { id: 'notifications', label: 'Notificaciones', icon: 'notifications' },
      { id: 'settings', label: 'Configuración', icon: 'settings' },
    ],
    actionButton: {
      label: 'Nuevo',
      icon: 'add',
    },
    height: 500,
  },
  parameters: {
    docs: {
      description: {
        story: 'Sidenav with simple navigation items only (no grouped sections).',
      },
    },
  },
};

/**
 * With selected item in group
 */
export const SelectedInGroup: Story = {
  args: {
    variant: 'default',
    logo: true,
    showActionButton: true,
    items: [
      { id: 'home', label: 'Inicio', icon: 'home' },
      { id: 'appointments', label: 'Citas', icon: 'event' },
      {
        header: 'Mi salud',
        items: [
          { id: 'orders', label: 'Órdenes', icon: 'order_approve', selected: true },
          { id: 'prescriptions', label: 'Recetas', icon: 'medication' },
          { id: 'results', label: 'Resultados', icon: 'biotech' },
        ],
      },
    ],
    actionButton: {
      label: 'Agendar',
      icon: 'add',
    },
    height: 500,
  },
  parameters: {
    docs: {
      description: {
        story: 'Sidenav with a selected item inside a group.',
      },
    },
  },
};

/**
 * Interactive playground
 */
export const Playground: Story = {
  args: {
    variant: 'default',
    logo: true,
    showActionButton: true,
    items: defaultItems,
    actionButton: {
      label: 'Agendar',
      icon: 'add',
    },
    height: 700,
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive playground to experiment with all Sidenav props.',
      },
    },
  },
};

/**
 * Custom width
 */
export const CustomWidth: Story = {
  args: {
    variant: 'default',
    logo: true,
    showActionButton: true,
    items: defaultItems,
    actionButton: {
      label: 'Agendar',
      icon: 'add',
    },
    width: 300,
    height: 600,
  },
  parameters: {
    docs: {
      description: {
        story: 'Sidenav with custom width (300px instead of default 256px).',
      },
    },
  },
};

/**
 * Full height (100vh)
 */
export const FullHeight: Story = {
  args: {
    variant: 'default',
    logo: true,
    showActionButton: true,
    items: defaultItems,
    actionButton: {
      label: 'Agendar',
      icon: 'add',
    },
    height: '100vh',
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Sidenav with full viewport height.',
      },
    },
  },
};

/**
 * With click handlers
 */
export const WithClickHandlers: Story = {
  render: () => {
    const handleItemClick = (item: { label: string }) => {
      alert(`Clicked: ${item.label}`);
    };

    return (
      <Sidenav
        variant="default"
        items={[
          { id: 'home', label: 'Inicio', icon: 'home', selected: true },
          { id: 'calendar', label: 'Calendario', icon: 'calendar_today' },
          { id: 'messages', label: 'Mensajes', icon: 'mail' },
        ]}
        actionButton={{
          label: 'Agendar',
          icon: 'add',
          onClick: () => alert('Action button clicked!'),
        }}
        onItemClick={handleItemClick}
        height={400}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Sidenav with click handlers for navigation items and action button.',
      },
    },
  },
};

