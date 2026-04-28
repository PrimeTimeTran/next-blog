# Yabai (Window Manager)

- [docs](https://github.com/asmvik/yabai/wiki/Commands)

## Shortcuts

| Keys               | Commands                                 |     |     |     |
| ------------------ | ---------------------------------------- | --- | --- | --- |
|                    |                                          |     |     |     |
| ⌥ + ⇧ + t          | float centered                           |     |     |     |
| ⌥ + ⇧ + m          | toggle pane full screen                  |     |     |     |
| ⌥ + ⇧ + z          | toggle window max in pane                |     |     |     |
| ⌥ + ⌃ + j          | restart yabai                            |     |     |     |
| ⌥ + ⇧ + r          | balance windows                          |     |     |     |
|                    |                                          |     |     |     |
|                    |                                          |     |     |     |
|                    |                                          |     |     |     |
| ⚡️⚡️⚡️⚡️⚡️⚡️ | Focus                                    |     |     |     |
| ⌥ + j              | move focus down                          |     |     |     |
| ⌥ + k              | move focus up                            |     |     |     |
| ⌥ + h              | move focus left                          |     |     |     |
| ⌥ + l              | move focus right                         |     |     |     |
|                    |                                          |     |     |     |
| ⚡️⚡️⚡️⚡️⚡️⚡️ | Sizing                                   |     |     |     |
| ⌘ + ⌃ + j          | grow/shrink vertically(depends on focus) |     |     |     |
| ⌘ + ⌃ + k          | grow/shrink vertically(depends on focus) |     |     |     |
| ⌘ + ⌃ + h          | grow/shrink left(depends on focus)       |     |     |     |
| ⌘ + ⌃ + l          | grow/shrink right(depends on focus)      |     |     |     |
|                    |                                          |     |     |     |
| ⚡️⚡️⚡️⚡️⚡️⚡️ | Swapping                                 |     |     |     |
| ⌥ + ⇧ + h          | swap window with left neighbor           |     |     |     |
| ⌥ + ⇧ + l          | swap window with right neighbor          |     |     |     |
| ⌥ + ⇧ + j          | swap window with bottom neighbor         |     |     |     |
| ⌥ + ⇧ + k          | swap window with top neighbor            |     |     |     |
|                    |                                          |     |     |     |
| ⚡️⚡️⚡️⚡️⚡️⚡️ | Position                                 |     |     |     |
| ⌃ + ⌥ + j          | move window down                         |     |     |     |
| ⌃ + ⌥ + k          | move window up                           |     |     |     |
| ⌃ + ⌥ + h          | move window left                         |     |     |     |
| ⌃ + ⌥ + l          | move window right                        |     |     |     |
| ⌥ + ⇧ + r          | rotate windows counter clockwise         |     |     |     |
|                    |                                          |     |     |     |
|                    | Warping                                  |     |     |     |
| ⌥ + ⌃ + j          | south                                    |     |     |     |
| ⌥ + ⌃ + k          | north                                    |     |     |     |
| ⌥ + ⌃ + h          | west                                     |     |     |     |
| ⌥ + ⌃ + l          | east                                     |     |     |     |
|                    |                                          |     |     |     |

| | | | | |

## CLI Commands

| command                        | behavior                                                                          |
| ------------------------------ | --------------------------------------------------------------------------------- |
| yabai --restart-service        | restarts yabai                                                                    |
| yabai -m space --balance       | balance out all windows both horizontally and vertically to occupy the same space |
| yabai -m space --mirror x-axis | Flip the tree horizontally                                                        |
| yabai -m space --mirror y-axis | <br />Flip the tree vertically                                                    |
| yabai -m space --rotate 90     | Rotate the window tree clock-wise                                                 |
|                                |                                                                                   |
|                                |                                                                                   |

## 🌐 Reference

| command   | behavior          |
| --------- | ----------------- |
| ⌘ +       | **key reference** |
| ⌘ + ⌥     | **key reference** |
| ⌘ + ⌃     | **key reference** |
| ⌘ + ⇧     | **key reference** |
| ⌘ + ⇧ + ⌥ | **key reference** |
| ⌘ + ⌃ + ⌥ | **key reference** |

## 2x2

"Warp toward previously focused window"
