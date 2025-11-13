---
draft: false
date: 2025-11-01
title: 'Navigators in Flutter'
summary: 'Drawer, Tab & Stack Navigators are fundamental build blocks to all large dynamic mobile apps. Here I demo some of the nuances of working with them.'
tags: ['flutter', 'system design']
---

# Introduction

<img src="/static/gifs/datelendar-navigators.gif" alt="preview" />

Most applications make use of the following navigators in some form.

- Drawer Navigator
- Tab Navigator
- Stack Navigator

The hard part is using them together seamlessly where accompanying widgets behave as we expect. For example:

- [ ] Outter Drawer Navigator shared between multiple screens
  - [ ] Nested Tab Navigators
    - [ ] Nested Stack Navigators
- [ ] Dynamic header on certain screens.
- [ ] Hamburger/Back icons when & where appropriate.
- [ ] Navigation state of differing tabs maintain state across tab changes.

This is how I'd achieve this functionality in Dart/Flutter

```dart
import 'package:client/features/presentation/pages/explore_screen.dart';
import 'package:flutter/material.dart';

class AppRoot extends StatelessWidget {
  const AppRoot({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Datelendar',
      debugShowCheckedModeBanner: true,
      initialRoute: '/app',
      routes: {
        '/onboarding': (_) => const OnboardingScreen(),
        '/app': (_) => const MainDrawerScreen(),
      },
    );
  }
}

class CalendarDetail extends StatelessWidget {
  const CalendarDetail({super.key});

  @override
  Widget build(BuildContext context) {
    return const Center(child: Text('Details inside Calendar tab'));
  }
}

class CalendarTab extends StatelessWidget {
  const CalendarTab({super.key});

  @override
  Widget build(BuildContext context) {
    return _TabScaffold(
      title: 'Calendar',
      child: Center(
        child: ElevatedButton(
          onPressed: () {
            final parent = context
                .findAncestorStateOfType<_MainDrawerScreenState>();
            parent?.notifyInnerNavChanged();
            Navigator.of(context)
                .push(MaterialPageRoute(builder: (_) => const CalendarDetail()))
                .then((_) => parent?.notifyInnerNavChanged());
          },
          child: const Text('Open Calendar Detail'),
        ),
      ),
    );
  }
}

class HomeDetail extends StatelessWidget {
  const HomeDetail({super.key});

  @override
  Widget build(BuildContext context) {
    return const Center(child: Text('Details inside Home tab'));
  }
}

class HomeTab extends StatelessWidget {
  const HomeTab({super.key});

  @override
  Widget build(BuildContext context) {
    return _TabScaffold(
      title: 'Home',
      child: Center(
        child: ElevatedButton(
          onPressed: () {
            final parent = context
                .findAncestorStateOfType<_MainDrawerScreenState>();
            parent?.notifyInnerNavChanged();
            Navigator.of(context)
                .push(MaterialPageRoute(builder: (_) => const HomeDetail()))
                .then((_) => parent?.notifyInnerNavChanged());
          },
          child: const Text('Open Home Detail'),
        ),
      ),
    );
  }
}

class MainDrawerScreen extends StatefulWidget {
  const MainDrawerScreen({super.key});

  @override
  State<MainDrawerScreen> createState() => _MainDrawerScreenState();

  static dynamic of(BuildContext context) =>
      context.findAncestorStateOfType<_MainDrawerScreenState>();
}

class OnboardingScreen extends StatelessWidget {
  const OnboardingScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Welcome to Datelendar')),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            const Text(
              'Onboarding goes here. Swipe or tap continue to enter the app.',
              textAlign: TextAlign.center,
            ),
            const SizedBox(height: 24),
            ElevatedButton(
              onPressed: () {
                Navigator.of(context).pushReplacementNamed('/app');
              },
              child: const Text('Continue to app'),
            ),
          ],
        ),
      ),
    );
  }
}

class ProfileDetail extends StatelessWidget {
  const ProfileDetail({super.key});

  @override
  Widget build(BuildContext context) {
    return const Center(child: Text('Details inside Profile tab'));
  }
}

class ProfileTab extends StatelessWidget {
  const ProfileTab({super.key});

  @override
  Widget build(BuildContext context) {
    return _TabScaffold(
      title: 'Profile',
      child: Center(
        child: ElevatedButton(
          onPressed: () {
            final parent = context
                .findAncestorStateOfType<_MainDrawerScreenState>();
            parent?.notifyInnerNavChanged();
            Navigator.of(context)
                .push(MaterialPageRoute(builder: (_) => const ProfileDetail()))
                .then((_) => parent?.notifyInnerNavChanged());
          },
          child: const Text('Open Profile Detail'),
        ),
      ),
    );
  }
}

class SearchDetail extends StatelessWidget {
  const SearchDetail({super.key});

  @override
  Widget build(BuildContext context) {
    return const Center(child: Text('Details inside Search tab'));
  }
}

class SearchTab extends StatelessWidget {
  const SearchTab({super.key});

  @override
  Widget build(BuildContext context) {
    return _TabScaffold(
      title: 'Search',
      child: Center(
        child: ElevatedButton(
          onPressed: () {
            final parent = context
                .findAncestorStateOfType<_MainDrawerScreenState>();
            parent?.notifyInnerNavChanged();
            Navigator.of(context)
                .push(MaterialPageRoute(builder: (_) => const SearchDetail()))
                .then((_) => parent?.notifyInnerNavChanged());
          },
          child: const Text('Open Search Detail'),
        ),
      ),
    );
  }
}

class _BottomNavBar extends StatelessWidget {
  final int currentIndex;
  final ValueChanged<int> onTap;

  const _BottomNavBar({
    required this.currentIndex,
    required this.onTap,
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return BottomNavigationBar(
      type: BottomNavigationBarType.fixed,
      currentIndex: currentIndex,
      onTap: onTap,
      backgroundColor: Theme.of(context).colorScheme.surface,
      elevation: 8,
      selectedItemColor: Theme.of(context).colorScheme.primary,
      unselectedItemColor: Theme.of(
        context,
      ).colorScheme.onSurface.withOpacity(0.7),
      showUnselectedLabels: true,
      items: [
        BottomNavigationBarItem(
          icon: Icon(
            Icons.home,
            color: Theme.of(context).colorScheme.onSurface.withOpacity(0.7),
          ),
          activeIcon: Container(
            padding: const EdgeInsets.all(8),
            decoration: BoxDecoration(
              color: Theme.of(context).colorScheme.primary,
              shape: BoxShape.circle,
            ),
            child: Icon(
              Icons.home,
              color: Theme.of(context).colorScheme.onPrimary,
            ),
          ),
          label: 'Home',
        ),
        BottomNavigationBarItem(
          icon: Icon(
            Icons.search,
            color: Theme.of(context).colorScheme.onSurface.withOpacity(0.7),
          ),
          activeIcon: Container(
            padding: const EdgeInsets.all(8),
            decoration: BoxDecoration(
              color: Theme.of(context).colorScheme.primary,
              shape: BoxShape.circle,
            ),
            child: Icon(
              Icons.search,
              color: Theme.of(context).colorScheme.onPrimary,
            ),
          ),
          label: 'Search',
        ),
        BottomNavigationBarItem(
          icon: Icon(
            Icons.calendar_today,
            color: Theme.of(context).colorScheme.onSurface.withOpacity(0.7),
          ),
          activeIcon: Container(
            padding: const EdgeInsets.all(8),
            decoration: BoxDecoration(
              color: Theme.of(context).colorScheme.primary,
              shape: BoxShape.circle,
            ),
            child: Icon(
              Icons.calendar_today,
              color: Theme.of(context).colorScheme.onPrimary,
            ),
          ),
          label: 'Calendar',
        ),
        BottomNavigationBarItem(
          icon: Icon(
            Icons.person,
            color: Theme.of(context).colorScheme.onSurface.withOpacity(0.7),
          ),
          activeIcon: Container(
            padding: const EdgeInsets.all(8),
            decoration: BoxDecoration(
              color: Theme.of(context).colorScheme.primary,
              shape: BoxShape.circle,
            ),
            child: Icon(
              Icons.person,
              color: Theme.of(context).colorScheme.onPrimary,
            ),
          ),
          label: 'Profile',
        ),
      ],
    );
  }
}

class _MainDrawerScreenState extends State<MainDrawerScreen> {
  int _currentIndex = 0;
  final ValueNotifier<Widget?> _headerNotifier = ValueNotifier<Widget?>(null);

  final List<BuildContext?> _navigatorContexts = List<BuildContext?>.filled(
    4,
    null,
  );

  final GlobalKey<ScaffoldState> _scaffoldKey = GlobalKey<ScaffoldState>();

  final List<String> _titles = const ['Home', 'Search', 'Calendar', 'Profile'];

  int get currentIndex => _currentIndex;

  @override
  Widget build(BuildContext context) {
    final bool canPop = _navigatorContexts[_currentIndex] != null
        ? Navigator.of(
            _navigatorContexts[_currentIndex]!,
            rootNavigator: false,
          ).canPop()
        : false;

    return WillPopScope(
      onWillPop: _onWillPop,
      child: Scaffold(
        key: _scaffoldKey,
        appBar: AppBar(
          title: ValueListenableBuilder<Widget?>(
            valueListenable: _headerNotifier,
            builder: (context, header, _) {
              if (header != null) return header;
              return Text(_titles[_currentIndex]);
            },
          ),
          leading: canPop
              ? BackButton(
                  onPressed: () {
                    final ctx = _navigatorContexts[_currentIndex];
                    if (ctx != null)
                      Navigator.of(ctx, rootNavigator: false).pop();
                    setState(() {});
                  },
                )
              : IconButton(
                  icon: const Icon(Icons.menu),
                  onPressed: () => _scaffoldKey.currentState?.openDrawer(),
                ),
        ),
        drawer: Drawer(
          child: SafeArea(
            child: Column(
              children: [
                const DrawerHeader(
                  child: Text('Menu', style: TextStyle(fontSize: 24)),
                ),
                ListTile(
                  leading: const Icon(Icons.home),
                  title: const Text('Home'),
                  onTap: () {
                    Navigator.of(context).pop();
                    _setTab(0);
                  },
                ),
                ListTile(
                  leading: const Icon(Icons.search),
                  title: const Text('Search'),
                  onTap: () {
                    Navigator.of(context).pop();
                    _setTab(1);
                  },
                ),
                ListTile(
                  leading: const Icon(Icons.calendar_today),
                  title: const Text('Calendar'),
                  onTap: () {
                    Navigator.of(context).pop();
                    _setTab(2);
                  },
                ),
                ListTile(
                  leading: const Icon(Icons.person),
                  title: const Text('Profile'),
                  onTap: () {
                    Navigator.of(context).pop();
                    _setTab(3);
                  },
                ),
                const Spacer(),
                ListTile(
                  leading: const Icon(Icons.logout),
                  title: const Text('Restart onboarding'),
                  onTap: () {
                    Navigator.of(context).pushReplacementNamed('/onboarding');
                  },
                ),
              ],
            ),
          ),
        ),
        body: IndexedStack(
          index: _currentIndex,
          children: List.generate(4, (index) => _buildNavigator(index)),
        ),
        bottomNavigationBar: _BottomNavBar(
          currentIndex: _currentIndex,
          onTap: (i) => _setTab(i),
        ),
      ),
    );
  }

  void notifyInnerNavChanged() {
    setState(() {});
  }

  void setHeader(Widget? header) {
    _headerNotifier.value = header;
  }

  Widget _buildNavigator(int index) {
    return Navigator(
      key: ValueKey('nested-navigator-$index'),
      onGenerateRoute: (settings) {
        late Widget page;
        switch (index) {
          case 0:
            page = const ExploreScreen();
            break;
          case 1:
            page = const SearchTab();
            break;
          case 2:
            page = const CalendarTab();
            break;
          case 3:
            page = const ProfileTab();
            break;
          default:
            page = const SizedBox.shrink();
        }
        return MaterialPageRoute(
          builder: (ctx) {
            _navigatorContexts[index] = ctx;
            return page;
          },
        );
      },
    );
  }

  Widget? _defaultHeaderForIndex(int index) {
    switch (index) {
      case 1:
        return const _SearchHeader();
      default:
        return null;
    }
  }

  Future<bool> _onWillPop() async {
    final ctx = _navigatorContexts[_currentIndex];
    if (ctx != null) {
      final currentNavigator = Navigator.of(ctx, rootNavigator: false);
      if (currentNavigator.canPop()) {
        currentNavigator.pop();
        setState(() {});
        return false;
      }
    }
    return true;
  }

  void _setTab(int index) {
    if (index < 0 || index >= _navigatorContexts.length) return;
    setState(() => _currentIndex = index);
    setHeader(_defaultHeaderForIndex(index));
  }
}

class _SearchHeader extends StatelessWidget {
  const _SearchHeader({super.key});

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: 40,
      child: TextField(
        textInputAction: TextInputAction.search,
        decoration: InputDecoration(
          hintText: 'Search venues…',
          filled: true,
          fillColor: Theme.of(context).colorScheme.surfaceContainerHighest,
          prefixIcon: const Icon(Icons.search),
          contentPadding: const EdgeInsets.symmetric(
            horizontal: 12,
            vertical: 8,
          ),
          border: OutlineInputBorder(
            borderRadius: BorderRadius.circular(8),
            borderSide: BorderSide.none,
          ),
        ),
        onSubmitted: (query) {
        },
      ),
    );
  }
}

class _TabScaffold extends StatelessWidget {
  final String title;
  final Widget child;

  const _TabScaffold({required this.title, required this.child, super.key});

  @override
  Widget build(BuildContext context) {
    final double bottomInset =
        MediaQuery.of(context).padding.bottom + kBottomNavigationBarHeight;
    return SafeArea(
      child: Padding(
        padding: EdgeInsets.fromLTRB(16.0, 16.0, 16.0, 16.0 + bottomInset),
        child: child,
      ),
    );
  }
}
```
