import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { useTheme } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';
import PersonRounded from '@mui/icons-material/PersonRounded';
import VisibilityOffRounded from '@mui/icons-material/VisibilityOffRounded';
import { Box } from '../components/atoms/Box';
import { Stack } from '../components/atoms/Stack';
import { Typography } from '../components/atoms/Typography/Typography';
import { Button } from '../components/atoms/Button';
import { Link } from '../components/atoms/Link';
import { TextField } from '../components/atoms/TextField';
import { Checkbox } from '../components/atoms/Checkbox';
import { FormControlLabel } from '../components/atoms/FormControlLabel';
import { Icon } from '../components/atoms/Icon';
import { MaterialSymbol } from '../components/atoms/MaterialSymbol';
import { CardHeader } from '../components/molecules/Card/CardHeader';

const imgAppStoreBadge = 'https://www.figma.com/api/mcp/asset/162ebbf1-7456-446f-bb7e-c8db6a634177';
const imgGooglePlayBadge =
  'https://www.figma.com/api/mcp/asset/2c309202-fe65-4908-9036-a1e2e5079972';
const imgQrCode = 'https://www.figma.com/api/mcp/asset/7d2d8d28-3a7c-4e06-91e9-d2d5c83f34f7';
const imgUnion = 'https://www.figma.com/api/mcp/asset/6647050f-f251-4a40-b7d3-8bb9233cbea8';
const imgIPhoneFrame = 'https://www.figma.com/api/mcp/asset/b154fbe6-02c1-4c70-93fc-fad5fecbdb05';
const imgIPhoneScreen = 'https://www.figma.com/api/mcp/asset/e15ad7fc-f6be-4665-80b0-458dc76eaa87';
const imgMiniMockup = 'https://www.figma.com/api/mcp/asset/fac69383-3da3-4de4-8a7e-10b54946195d';
const imgLogoWord = 'https://www.figma.com/api/mcp/asset/e0270cc1-8b51-429a-b860-cbf28a24f227';
const imgLogoIcon = 'https://www.figma.com/api/mcp/asset/579a4c90-6e1c-4a73-97f0-775f2fc6baea';

const MiRedSaludLoginTemplate = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        bgcolor: 'background.default',
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        px: { xs: 2, sm: 3, lg: 4 },
        py: { xs: 3, lg: 4 },
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: 1560,
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
          gap: { xs: 3, lg: 0 },
          borderRadius: { xs: 3, lg: 0 },
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            position: 'relative',
            flex: 1,
            minHeight: { xs: 'auto', lg: 840 },
            p: { xs: 3, lg: 4 },
            color: 'primary.contrastText',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `linear-gradient(17deg, ${theme.palette.primary.dark} 10%, ${theme.palette.primary.main} 85%)`,
            }}
          />
          <Box
            component="img"
            src={imgUnion}
            alt=""
            aria-hidden="true"
            sx={{
              position: 'absolute',
              width: { xs: 600, lg: 900 },
              height: 'auto',
              right: { xs: -220, lg: -320 },
              top: { xs: -200, lg: -240 },
              transform: 'rotate(-18deg) skewX(-2deg)',
              opacity: 0.25,
            }}
          />
          <Stack
            spacing={4}
            sx={{
              position: 'relative',
              zIndex: 1,
              width: '100%',
              maxWidth: 520,
              pb: { xs: 0, lg: 6 },
            }}
          >
            <Box>
              <Typography variant="h3" sx={{ color: 'primary.contrastText' }}>
                Conoce nuestra nueva
              </Typography>
              <Typography variant="h3" sx={{ color: 'primary.contrastText' }}>
                App{' '}
                <Box component="span" sx={{ color: 'secondary.main' }}>
                  MiRedSalud
                </Box>
              </Typography>
            </Box>
            <Typography variant="h6" sx={{ color: 'primary.contrastText' }}>
              Lleva MiRedSalud contigo a donde vayas. Nuestra nueva aplicación móvil te permite
              acceder a toda tu información médica desde tu smartphone de manera rápida y segura.
            </Typography>
            <Stack direction="row" spacing={2} alignItems="center">
              <Box
                component="img"
                src={imgAppStoreBadge}
                alt="Descargar en App Store"
                sx={{ height: 42, width: 'auto' }}
              />
              <Box
                component="img"
                src={imgGooglePlayBadge}
                alt="Descargar en Google Play"
                sx={{ height: 42, width: 'auto' }}
              />
            </Stack>
            <Stack spacing={2}>
              <Typography variant="h5" sx={{ color: 'primary.contrastText' }}>
                Escanea el código para descargar
              </Typography>
              <Box
                sx={{
                  width: 161,
                  height: 161,
                  bgcolor: 'common.white',
                  borderRadius: 2,
                  p: 1,
                }}
              >
                <Box component="img" src={imgQrCode} alt="QR de descarga" sx={{ width: '100%' }} />
              </Box>
            </Stack>
          </Stack>
          <Box
            sx={{
              position: 'absolute',
              right: { xs: 24, lg: 72 },
              bottom: { xs: 24, lg: 72 },
              width: { xs: 220, lg: 326 },
              height: { xs: 440, lg: 669 },
              display: { xs: 'none', md: 'block' },
            }}
          >
            <Box
              component="img"
              src={imgIPhoneFrame}
              alt=""
              aria-hidden="true"
              sx={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
            />
            <Box
              component="img"
              src={imgIPhoneScreen}
              alt="Vista de la app MiRedSalud"
              sx={{
                position: 'absolute',
                inset: '2%',
                width: '96%',
                height: '96%',
                borderRadius: 2.2,
                objectFit: 'cover',
              }}
            />
          </Box>
        </Box>

        <Box
          sx={{
            flex: 1,
            minHeight: { xs: 'auto', lg: 840 },
            bgcolor: 'background.paper',
            p: { xs: 3, lg: 4 },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: { xs: 3, lg: 0 },
          }}
        >
          <Box sx={{ width: '100%' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 4 }}>
              <Icon type="font" iconName="arrow_back" size="small" />
              <Link
                href="#"
                underline="hover"
                sx={{
                  color: 'text.secondary',
                  fontWeight: theme.typography.fontWeightRegular,
                  '& span': { color: 'primary.main' },
                }}
              >
                Regresar al inicio de <Box component="span">RedSalud</Box>
              </Link>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
              <Stack direction="row" spacing={1} alignItems="center">
                <Box
                  component="img"
                  src={imgLogoIcon}
                  alt=""
                  aria-hidden="true"
                  sx={{ height: 18 }}
                />
                <Box component="img" src={imgLogoWord} alt="MiRedSalud" sx={{ height: 22 }} />
              </Stack>
            </Box>
            <CardHeader
              title="Iniciar sesión"
              subheader="Accede a tu cuenta"
              sx={{
                px: 0,
                '.MuiCardHeader-title': { fontSize: theme.typography.h5.fontSize },
                '.MuiCardHeader-subheader': { fontSize: theme.typography.body2.fontSize },
              }}
            />
            <Stack spacing={3} sx={{ mt: 2 }}>
              <TextField
                label="RUT"
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Icon icon={PersonRounded} />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                label="Contraseña"
                type="password"
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Icon icon={VisibilityOffRounded} />
                    </InputAdornment>
                  ),
                }}
              />
              <FormControlLabel control={<Checkbox color="primary" />} label="Recordar mis datos" />
            </Stack>
            <Button
              variant="contained"
              color="primary"
              size="large"
              fullWidth
              sx={{ mt: 3, borderRadius: theme.shape.md }}
            >
              Ingresar
            </Button>
            <Stack spacing={1} alignItems="center" sx={{ mt: 2 }}>
              <Link href="#" underline="always" color="primary">
                Olvidé mi contraseña
              </Link>
              <Link href="#" underline="always" color="primary">
                Registrarme en MiRedSalud
              </Link>
            </Stack>
          </Box>

          <Box
            sx={{
              width: '100%',
              maxWidth: 432,
              border: '1px solid',
              borderColor: 'primary.main',
              borderRadius: 2,
              px: 2,
              py: 2.5,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 2,
            }}
          >
            <Box sx={{ maxWidth: 246 }}>
              <Typography variant="body1" sx={{ color: 'primary.dark', fontWeight: 700 }}>
                Crea tu cuenta y disfruta los beneficios de MiRedSalud
              </Typography>
              <Button
                variant="text"
                color="inherit"
                endIcon={<MaterialSymbol icon="arrow_forward" size="small" color="primary.main" />}
                sx={{
                  px: 1,
                  py: 0.5,
                  color: 'text.primary',
                  fontWeight: 700,
                  textTransform: 'none',
                  borderRadius: 999,
                }}
              >
                Conoce cómo registrarte
              </Button>
            </Box>
            <Box
              component="img"
              src={imgMiniMockup}
              alt="Vista previa de la app"
              sx={{
                width: 136,
                height: 158,
                borderTopLeftRadius: 2,
                borderTopRightRadius: 2,
                objectFit: 'cover',
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const meta: Meta = {
  title: 'Templates/MiRedSalud Login',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

export const Default: StoryObj = {
  render: () => <MiRedSaludLoginTemplate />,
};
