<<<<<<< HEAD
import {
  createStyles,
  Header,
  HoverCard,
  Group,
  Button,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Anchor,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  rem,
  Container,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconNotification,
  IconCode,
  IconBook,
  IconChartPie3,
  IconFingerprint,
  IconCoin,
  IconChevronDown,
} from "@tabler/icons-react";

// import HeaderCart from "./HeaderCart/HeaderCart";
import { Link } from "@mongez/react-router";
import URLS from "apps/front-office/utils/urls";

const useStyles = createStyles(theme => ({
  header: {
    backgroundColor: "var(--backgroundColor)",
    color: "var(--headingColor)",
  },
  logo: {
    width: "125px",
  },
  link: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: "none",
    color: "var(--headingColor)",
    fontWeight: 700,
    fontSize: theme.fontSizes.sm,

    [theme.fn.smallerThan("sm")]: {
      height: rem(42),
      display: "flex",
      alignItems: "center",
      width: "100%",
    },

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    }),
  },

  subLink: {
    width: "100%",
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    borderRadius: theme.radius.md,

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[7]
          : theme.colors.gray[0],
    }),

    "&:active": theme.activeStyles,
  },

  dropdownFooter: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[7]
        : theme.colors.gray[0],
    margin: `calc(${theme.spacing.md} * -1)`,
    marginTop: theme.spacing.sm,
    padding: `${theme.spacing.md} calc(${theme.spacing.md} * 2)`,
    paddingBottom: theme.spacing.xl,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  hiddenMobile: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
}));

const mockdata = [
  {
    icon: IconCode,
    title: "Open source",
    description: "This Pokémon’s cry is very loud and distracting",
  },
  {
    icon: IconCoin,
    title: "Free for everyone",
    description: "The fluid of Smeargle’s tail secretions changes",
  },
  {
    icon: IconBook,
    title: "Documentation",
    description: "Yanma is capable of seeing 360 degrees without",
  },
  {
    icon: IconFingerprint,
    title: "Security",
    description: "The shell’s rounded shape and the grooves on its.",
  },
  {
    icon: IconChartPie3,
    title: "Analytics",
    description: "This Pokémon uses its flying ability to quickly chase",
  },
  {
    icon: IconNotification,
    title: "Notifications",
    description: "Combusken battles with the intensely hot flames it spews",
  },
];

export default function BaseHeader() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const { classes, theme } = useStyles();

  const links = mockdata.map(item => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Group noWrap align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon size={rem(22)} color={theme.fn.primaryColor()} />
        </ThemeIcon>
        <div>
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
          <Text size="xs" color="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));

  return (
    <Box pb={120}>
      <Header height={60} px="md" className={classes.header}>
        <Container size="xl" px={0} sx={{ height: "100%" }}>
          <Group position="apart" sx={{ height: "100%" }}>
            <img
              src="https://demo2.pavothemes.com/poco/wp-content/uploads/2020/10/logo_svg.svg"
              alt="logo"
              className={classes.logo}
            />
            <Group
              sx={{ height: "100%" }}
              spacing={0}
              className={classes.hiddenMobile}>
              <Link to={URLS.home} className={classes.link}>
                Home
              </Link>
              <HoverCard
                width={600}
                position="bottom"
                radius="md"
                shadow="md"
                withinPortal>
                <HoverCard.Target>
                  <a href="#" className={classes.link}>
                    <Center inline>
                      <Box component="span" mr={5}>
                        Menu
                      </Box>
                      <IconChevronDown
                        size={16}
                        color={theme.fn.primaryColor()}
                      />
                    </Center>
                  </a>
                </HoverCard.Target>

                <HoverCard.Dropdown sx={{ overflow: "hidden" }}>
                  <Group position="apart" px="md">
                    <Text fw={500}>Features</Text>
                    <Anchor href="#" fz="xs">
                      View all
                    </Anchor>
                  </Group>

                  <Divider
                    my="sm"
                    mx="-md"
                    color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
                  />

                  <SimpleGrid cols={2} spacing={0}>
                    {links}
                  </SimpleGrid>

                  <div className={classes.dropdownFooter}>
                    <Group position="apart">
                      <div>
                        <Text fw={500} fz="sm">
                          Get started
                        </Text>
                        <Text size="xs" color="dimmed">
                          Their food sources have decreased, and their numbers
                        </Text>
                      </div>
                      <Button variant="default">Get started</Button>
                    </Group>
                  </div>
                </HoverCard.Dropdown>
              </HoverCard>
              <Link to={URLS.aboutUs} className={classes.link}>
                About
              </Link>
              <Link to="/academy" className={classes.link}>
                Shop
              </Link>
            </Group>

            <Group className={classes.hiddenMobile}>
              {/* <HeaderCart /> */}
              <Button variant="default">Log in</Button>
              <Button>Sign up</Button>
            </Group>

            <Burger
              opened={drawerOpened}
              onClick={toggleDrawer}
              className={classes.hiddenDesktop}
            />
          </Group>
        </Container>
      </Header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        className={classes.hiddenDesktop}
        zIndex={1000000}>
        <ScrollArea h={`calc(100vh - ${rem(60)})`} mx="-md">
          <Divider
            my="sm"
            color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
          />

          <a href="#" className={classes.link}>
            Home
          </a>
          <UnstyledButton className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <Box component="span" mr={5}>
                Features
              </Box>
              <IconChevronDown size={16} color={theme.fn.primaryColor()} />
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened}>{links}</Collapse>
          <a href="#" className={classes.link}>
            Learn
          </a>
          <a href="#" className={classes.link}>
            Academy
          </a>

          <Divider
            my="sm"
            color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
          />

          <Group position="center" grow pb="xl" px="md">
            <Button variant="default">Log in</Button>
            <Button>Sign up</Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
=======
import HeaderBottom from "apps/front-office/design-system/layouts/Header/HeaderBottom";
import HeaderTop from "apps/front-office/design-system/layouts/Header/HeaderTop";

export default function Header() {
  return (
    <>
      <HeaderTop />
      <HeaderBottom />
    </>
>>>>>>> 5543f2e296a7b63c7f0c66cff41e569ef5fcd3d4
  );
}
