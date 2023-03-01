import {
  Button,
  Card,
  Box,
  CardActions,
  Typography,
  Avatar,
  alpha,
  Stack,
  Divider,
  styled,
  useTheme
} from '@mui/material';
import Text from 'src/components/Text';
import Label from 'src/components/Label';
import TrendingDownTwoToneIcon from '@mui/icons-material/TrendingDownTwoTone';
import TrendingUpTwoToneIcon from '@mui/icons-material/TrendingUpTwoTone';
import TrendingFlatTwoToneIcon from '@mui/icons-material/TrendingFlatTwoTone';

const AvatarWrapper = styled(Avatar)(
  ({ theme }) => `
    margin: ${theme.spacing(0, 0, 1, -0.5)};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: ${theme.spacing(1)};
    padding: ${theme.spacing(0.5)};
    border-radius: 60px;
    height: ${theme.spacing(5.5)};
    width: ${theme.spacing(5.5)};
    background: ${
      theme.palette.mode === 'dark'
        ? theme.colors.alpha.trueWhite[30]
        : alpha(theme.colors.alpha.black[100], 0.07)
    };
  
    img {
      background: ${theme.colors.alpha.trueWhite[100]};
      padding: ${theme.spacing(0.5)};
      display: block;
      border-radius: inherit;
      height: ${theme.spacing(4.5)};
      width: ${theme.spacing(4.5)};
    }
`
);

function WatchListRow() {
  const theme = useTheme();

  return (
    <Card>
      <Stack
        direction="row"
        justifyContent="space-evenly"
        alignItems="stretch"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={0}
      >
        <Box
          sx={{
            width: '100%',
            p: 3
          }}
        >
          <Box
            display="flex"
            alignItems="flex-start"
            justifyContent="space-between"
          >
            <Box display="flex" alignItems="center">
              <AvatarWrapper>
                <img
                  alt="BTC"
                  src="/static/images/placeholders/logo/bitcoin.png"
                />
              </AvatarWrapper>
              <Box>
                <Typography variant="h4" noWrap>
                  Bitcoin
                </Typography>
                <Typography variant="subtitle1" noWrap>
                  BTC
                </Typography>
              </Box>
            </Box>
            <Label color="secondary">24h</Label>
          </Box>
          <Box
            mt={3}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start'
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  pr: 1
                }}
              >
                $56,475.99
              </Typography>
              <Text color="success">
                <b>+12.5%</b>
              </Text>
            </Box>
            <TrendingUpTwoToneIcon
              sx={{
                color: `${theme.colors.success.main}`
              }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            width: '100%',
            p: 3
          }}
        >
          <Box
            display="flex"
            alignItems="flex-start"
            justifyContent="space-between"
          >
            <Box display="flex" alignItems="center">
              <AvatarWrapper>
                <img
                  alt="ETH"
                  src="/static/images/placeholders/logo/ethereum.png"
                />
              </AvatarWrapper>
              <Box>
                <Typography variant="h4" noWrap>
                  Ethereum
                </Typography>
                <Typography variant="subtitle1" noWrap>
                  ETH
                </Typography>
              </Box>
            </Box>
            <Label color="secondary">24h</Label>
          </Box>
          <Box
            mt={3}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start'
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  pr: 1
                }}
              >
                $1,968.00
              </Typography>
              <Text color="error">
                <b>-3.24%</b>
              </Text>
            </Box>
            <TrendingDownTwoToneIcon
              sx={{
                color: `${theme.colors.error.main}`
              }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            width: '100%',
            p: 3
          }}
        >
          <Box
            display="flex"
            alignItems="flex-start"
            justifyContent="space-between"
          >
            <Box display="flex" alignItems="center">
              <AvatarWrapper>
                <img
                  alt="ADA"
                  src="/static/images/placeholders/logo/cardano.png"
                />
              </AvatarWrapper>
              <Box>
                <Typography variant="h4" noWrap>
                  Cardano
                </Typography>
                <Typography variant="subtitle1" noWrap>
                  ADA
                </Typography>
              </Box>
            </Box>
            <Label color="secondary">24h</Label>
          </Box>
          <Box
            mt={3}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start'
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  pr: 1
                }}
              >
                $23.00
              </Typography>
              <Text color="error">
                <b>-0.33%</b>
              </Text>
            </Box>
            <TrendingFlatTwoToneIcon
              sx={{
                color: `${theme.colors.warning.main}`
              }}
            />
          </Box>
        </Box>
      </Stack>
      <Divider />
      <CardActions
        disableSpacing
        sx={{
          p: 3,
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Button variant="outlined">View more assets</Button>
      </CardActions>
    </Card>
  );
}

export default WatchListRow;
