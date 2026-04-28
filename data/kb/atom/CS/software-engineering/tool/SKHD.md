# Yabai

## Focus within space

alt - j : yabai -m window --focus south
alt - k : yabai -m window --focus north
alt - h : yabai -m window --focus west
alt - l : yabai -m window --focus east

## Focus between displays

alt - w: yabai -m display --focus west
alt - e: yabai -m display --focus east
alt - n: yabai -m display --focus north
alt - s: yabai -m display --focus south

alt - n: yabai -m window --focus north
alt - b: yabai -m window --focus south
alt - v: yabai -m window --focus west
alt - ,: yabai -m window --focus east

## Rotate layout clockwise

shift + alt - r : yabai -m space --rotate 270

## Toggle window float

shift + alt - t : yabai -m window --toggle float --grid 4:4:1:1:2:2

## Maximize a window(works when tiled, not floating)

shift + alt - m : yabai -m window --toggle zoom-fullscreen

## Resize windows evenly within space

shift + alt - e : yabai -m space --balance

## Swap Windows

shift + alt - h : yabai -m window --swap west
shift + alt - j : yabai -m window --swap south
shift + alt - k : yabai -m window --swap north
shift + alt - l : yabai -m window --swap east

## Resize windows

ctrl + cmd - h : yabai -m window west --resize right:-40:0 2> /dev/null || yabai -m window --resize right:-40:0
ctrl + cmd - j : yabai -m window north --resize bottom:0:40 2> /dev/null || yabai -m window --resize bottom:0:40
ctrl + cmd - k : yabai -m window south --resize top:0:-40 2> /dev/null || yabai -m window --resize top:0:-40
ctrl + cmd - l : yabai -m window east --resize left:40:0 2> /dev/null || yabai -m window --resize left:40:0

## Move window to prev and next space

shift + alt - p : yabai -m window --space prev;
shift + alt - n : yabai -m window --space next;

## Move window to space

shift + alt - 1 : yabai -m window --space 1;
shift + alt - 2 : yabai -m window --space 2;
shift + alt - 3 : yabai -m window --space 3;
shift + alt - 4 : yabai -m window --space 4;
shift + alt - 5 : yabai -m window --space 5;
shift + alt - 6 : yabai -m window --space 6;
shift + alt - 7 : yabai -m window --space 7;

## stop/start/restart yabai

ctrl + alt - q : yabai --stop-service
ctrl + alt - s : yabai --start-service
ctrl + alt - r : yabai --restart-service

## Unsure...

### This one never works

### flip along y-axis

shift + alt - y : yabai -m space --mirror y-axis

### This one sometimes works

## flip along x-axis

shift + alt - x : yabai -m space --mirror x-axis

## Move window to display left and right

shift + alt - s : yabai -m window --display west; yabai -m display --focus west;
shift + alt - g : yabai -m window --display east; yabai -m display --focus east;

## Move window and split

ctrl + alt - j : yabai -m window --warp south
ctrl + alt - k : yabai -m window --warp north
ctrl + alt - h : yabai -m window --warp west
ctrl + alt - l : yabai -m window --warp east

# Resize

shift + alt + ctrl + cmd - j : yabai -m window north --resize bottom:0:40 2> /dev/null || yabai -m window --resize bottom:0:40
shift + alt + ctrl + cmd - k : yabai -m window south --resize top:0:-40 2> /dev/null || yabai -m window --resize top:0:-40
shift + alt + ctrl + cmd - h : yabai -m window west --resize right:-40:0 2> /dev/null || yabai -m window --resize right:-40:0
shift + alt + ctrl + cmd - l : yabai -m window east --resize left:40:0 2> /dev/null || yabai -m window --resize left:40:0

# Full

shift + alt + ctrl + cmd - i: yabai -m window --toggle zoom-parent

# Full window

shift + alt + ctrl + cmd - u: yabai -m window --toggle zoom-fullscreen

# Maximie window(pressing the green full screen)

shift + alt + ctrl + cmd - y: yabai -m window --toggle native-fullscreen

# If shortcuts aren't working, sometimes need to restart Hyperkey

# General

## Insert

shift + alt + ctrl + cmd - b : skhd -t "### "
shift + alt + ctrl + cmd - n : skhd -t "#### "
shift + alt + ctrl + cmd - m : skhd -t "##### "
