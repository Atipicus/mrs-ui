/**
 * styleCompositions Tests
 * @package @mrs/ui
 */

import { styleCompositions } from './styleCompositions';
import { theme } from './theme';
import type { Theme } from '@mui/material/styles';

const t = theme as Theme;

describe('styleCompositions', () => {
  describe('button', () => {
    it('base() returns an object with fontWeight, textTransform, borderRadius, transition', () => {
      const base = styleCompositions.button.base();
      expect(base).toHaveProperty('fontWeight');
      expect(base).toHaveProperty('textTransform', 'none');
      expect(base).toHaveProperty('borderRadius');
      expect(base).toHaveProperty('transition');
    });

    it('sizes.small has fontSize and padding', () => {
      expect(styleCompositions.button.sizes.small).toHaveProperty('fontSize', '0.8125rem');
      expect(styleCompositions.button.sizes.small).toHaveProperty('padding', '4px 10px');
    });

    it('sizes.medium has correct fontSize and padding', () => {
      expect(styleCompositions.button.sizes.medium).toHaveProperty('fontSize', '0.875rem');
      expect(styleCompositions.button.sizes.medium).toHaveProperty('padding', '6px 16px');
    });

    it('sizes.large has correct fontSize and padding', () => {
      expect(styleCompositions.button.sizes.large).toHaveProperty('fontSize', '1rem');
      expect(styleCompositions.button.sizes.large).toHaveProperty('padding', '8px 22px');
    });

    it('states.disabled() returns opacity, cursor, pointerEvents', () => {
      const disabled = styleCompositions.button.states.disabled();
      expect(disabled).toHaveProperty('opacity', 0.5);
      expect(disabled).toHaveProperty('cursor', 'not-allowed');
      expect(disabled).toHaveProperty('pointerEvents', 'none');
    });
  });

  describe('input', () => {
    it('base() returns borderRadius and transition', () => {
      const base = styleCompositions.input.base();
      expect(base).toHaveProperty('borderRadius');
      expect(base).toHaveProperty('transition');
    });

    it('sizes.small, medium, large have correct values', () => {
      expect(styleCompositions.input.sizes.small.fontSize).toBe('0.8125rem');
      expect(styleCompositions.input.sizes.medium.fontSize).toBe('0.875rem');
      expect(styleCompositions.input.sizes.large.fontSize).toBe('1rem');
    });

    it('states.disabled(theme) returns backgroundColor and cursor', () => {
      const disabled = styleCompositions.input.states.disabled(t);
      expect(disabled).toHaveProperty('backgroundColor');
      expect(disabled).toHaveProperty('cursor', 'not-allowed');
    });

    it('states.error(theme) returns borderColor and color', () => {
      const error = styleCompositions.input.states.error(t);
      expect(error).toHaveProperty('borderColor');
      expect(error).toHaveProperty('color');
    });

    it('states.focused(theme) returns borderColor and outline', () => {
      const focused = styleCompositions.input.states.focused(t);
      expect(focused).toHaveProperty('borderColor');
      expect(focused).toHaveProperty('outline');
    });
  });

  describe('surface', () => {
    it('base(theme) returns borderRadius, backgroundColor, color', () => {
      const base = styleCompositions.surface.base(t);
      expect(base).toHaveProperty('borderRadius');
      expect(base).toHaveProperty('backgroundColor');
      expect(base).toHaveProperty('color');
    });

    it('elevations.none has boxShadow: none', () => {
      expect(styleCompositions.surface.elevations.none).toHaveProperty('boxShadow', 'none');
    });

    it('elevations.low has boxShadow as function', () => {
      const shadow = styleCompositions.surface.elevations.low;
      expect(shadow).toHaveProperty('boxShadow');
      expect(typeof (shadow as any).boxShadow).toBe('function');
    });

    it('elevations.medium and high have boxShadow as function', () => {
      expect(typeof (styleCompositions.surface.elevations.medium as any).boxShadow).toBe(
        'function'
      );
      expect(typeof (styleCompositions.surface.elevations.high as any).boxShadow).toBe('function');
    });
  });

  describe('listItem', () => {
    it('base() returns borderRadius and transition', () => {
      const base = styleCompositions.listItem.base();
      expect(base).toHaveProperty('borderRadius');
      expect(base).toHaveProperty('transition');
    });

    it('states.selected(theme) returns backgroundColor and fontWeight', () => {
      const selected = styleCompositions.listItem.states.selected(t);
      expect(selected).toHaveProperty('backgroundColor');
      expect(selected).toHaveProperty('fontWeight');
    });

    it('states.hover(theme) returns backgroundColor', () => {
      const hover = styleCompositions.listItem.states.hover(t);
      expect(hover).toHaveProperty('backgroundColor');
    });

    it('states.disabled() returns opacity and cursor', () => {
      const disabled = styleCompositions.listItem.states.disabled();
      expect(disabled).toHaveProperty('opacity', 0.5);
      expect(disabled).toHaveProperty('cursor', 'not-allowed');
    });
  });

  describe('chip', () => {
    it('base() returns borderRadius, fontWeight, transition', () => {
      const base = styleCompositions.chip.base();
      expect(base).toHaveProperty('borderRadius');
      expect(base).toHaveProperty('fontWeight');
      expect(base).toHaveProperty('transition');
    });

    it('sizes.small and medium have correct fontSize', () => {
      expect(styleCompositions.chip.sizes.small.fontSize).toBe('0.75rem');
      expect(styleCompositions.chip.sizes.medium.fontSize).toBe('0.875rem');
    });

    it('states.disabled() returns opacity and cursor', () => {
      const disabled = styleCompositions.chip.states.disabled();
      expect(disabled).toHaveProperty('opacity', 0.5);
      expect(disabled).toHaveProperty('cursor', 'not-allowed');
    });
  });

  describe('feedback', () => {
    it('base() returns borderRadius, padding, transition', () => {
      const base = styleCompositions.feedback.base();
      expect(base).toHaveProperty('borderRadius');
      expect(base).toHaveProperty('padding');
      expect(base).toHaveProperty('transition');
    });

    it('variants.success(theme) returns backgroundColor and color', () => {
      const v = styleCompositions.feedback.variants.success(t);
      expect(v).toHaveProperty('backgroundColor');
      expect(v).toHaveProperty('color');
    });

    it('variants.warning(theme) returns backgroundColor and color', () => {
      const v = styleCompositions.feedback.variants.warning(t);
      expect(v).toHaveProperty('backgroundColor');
      expect(v).toHaveProperty('color');
    });

    it('variants.error(theme) returns backgroundColor and color', () => {
      const v = styleCompositions.feedback.variants.error(t);
      expect(v).toHaveProperty('backgroundColor');
      expect(v).toHaveProperty('color');
    });

    it('variants.info(theme) returns backgroundColor and color', () => {
      const v = styleCompositions.feedback.variants.info(t);
      expect(v).toHaveProperty('backgroundColor');
      expect(v).toHaveProperty('color');
    });
  });

  describe('states', () => {
    it('focus(theme) returns outline and outlineOffset', () => {
      const focus = styleCompositions.states.focus(t);
      expect(focus).toHaveProperty('outline');
      expect(focus).toHaveProperty('outlineOffset', '2px');
    });

    it('hover(theme) returns backgroundColor and transition', () => {
      const hover = styleCompositions.states.hover(t);
      expect(hover).toHaveProperty('backgroundColor');
      expect(hover).toHaveProperty('transition');
    });

    it('active(theme) returns backgroundColor and fontWeight', () => {
      const active = styleCompositions.states.active(t);
      expect(active).toHaveProperty('backgroundColor');
      expect(active).toHaveProperty('fontWeight');
    });

    it('disabled() returns opacity, cursor, pointerEvents', () => {
      const disabled = styleCompositions.states.disabled();
      expect(disabled).toHaveProperty('opacity', 0.5);
      expect(disabled).toHaveProperty('cursor', 'not-allowed');
      expect(disabled).toHaveProperty('pointerEvents', 'none');
    });

    it('loading() returns position, pointerEvents, opacity', () => {
      const loading = styleCompositions.states.loading();
      expect(loading).toHaveProperty('position', 'relative');
      expect(loading).toHaveProperty('pointerEvents', 'none');
      expect(loading).toHaveProperty('opacity', 0.7);
    });
  });

  describe('typography', () => {
    it('has bold, semiBold, medium, regular, light weights', () => {
      expect(styleCompositions.typography.bold).toHaveProperty('fontWeight');
      expect(styleCompositions.typography.semiBold).toHaveProperty('fontWeight');
      expect(styleCompositions.typography.medium).toHaveProperty('fontWeight');
      expect(styleCompositions.typography.regular).toHaveProperty('fontWeight');
      expect(styleCompositions.typography.light).toHaveProperty('fontWeight');
    });
  });

  describe('spacing', () => {
    it('compact, normal, comfortable, spacious have padding and gap', () => {
      expect(styleCompositions.spacing.compact).toHaveProperty('padding');
      expect(styleCompositions.spacing.compact).toHaveProperty('gap');
      expect(styleCompositions.spacing.normal).toHaveProperty('padding');
      expect(styleCompositions.spacing.comfortable).toHaveProperty('padding');
      expect(styleCompositions.spacing.spacious).toHaveProperty('padding');
    });
  });

  describe('borderRadius', () => {
    it('sharp has borderRadius: 0', () => {
      expect(styleCompositions.borderRadius.sharp).toHaveProperty('borderRadius', 0);
    });

    it('small, medium, large, rounded have numeric borderRadius', () => {
      expect(typeof styleCompositions.borderRadius.small.borderRadius).toBe('number');
      expect(typeof styleCompositions.borderRadius.medium.borderRadius).toBe('number');
      expect(typeof styleCompositions.borderRadius.large.borderRadius).toBe('number');
      expect(typeof styleCompositions.borderRadius.rounded.borderRadius).toBe('number');
    });
  });

  describe('layout', () => {
    it('flexRowCenter() returns display flex and flexDirection row', () => {
      const style = styleCompositions.layout.flexRowCenter();
      expect(style).toHaveProperty('display', 'flex');
      expect(style).toHaveProperty('flexDirection', 'row');
      expect(style).toHaveProperty('alignItems', 'center');
    });

    it('flexColumnCenter() returns display flex and flexDirection column', () => {
      const style = styleCompositions.layout.flexColumnCenter();
      expect(style).toHaveProperty('display', 'flex');
      expect(style).toHaveProperty('flexDirection', 'column');
    });

    it('fullWidth() returns width 100%', () => {
      const style = styleCompositions.layout.fullWidth();
      expect(style).toHaveProperty('width', '100%');
    });

    it('responsiveContainer() returns width and maxWidth 100%', () => {
      const style = styleCompositions.layout.responsiveContainer();
      expect(style).toHaveProperty('width', '100%');
      expect(style).toHaveProperty('maxWidth', '100%');
    });
  });
});
