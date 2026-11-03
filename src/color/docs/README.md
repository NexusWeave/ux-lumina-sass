# Color Reference
*Last updated: 2026-11-03*

This document provides an exhaustive inventory of all color tokens and semantic aliases defined within the `src/color` architecture.

> **Design Token Architecture:** All primitive colors (raw RGB values) are centralized as tokens within `src/color/base/_index.sass`. All other submodules (`accents`, `brands`, `icons`, `misc`, `neutral`, `palette/groovy-70s`, `stacks`, `_alerts.sass`, `_overlay.sass`) reference these base tokens semantically.
>
> **Accessibility Note:** For methodologies regarding the verification of color contrast against WCAG standards, please consult our [**Color Contrast & Accessibility Guide**](contrast.md).

---

## 1. Primitive Base Color Tokens (`src/color/base/_index.sass`)

### Blue & Navy Spectrum
| Token | RGB / RGBA Value |
|---|---|
| `$blue-950` | `rgb(16, 42, 82)` |
| `$blue-900` | `rgb(29, 46, 84)` |
| `$blue-850` | `rgb(1, 36, 86)` |
| `$blue-800` | `rgb(33, 116, 169)` |
| `$blue-750` | `rgb(0, 0, 128)` |
| `$blue-740` | `rgb(0, 0, 115)` |
| `$blue-730` | `rgb(25, 25, 140)` |
| `$blue-700` | `rgb(47, 99, 182)` |
| `$blue-650` | `rgb(0, 89, 156)` |
| `$blue-600` | `rgb(53, 83, 156)` |
| `$blue-580` | `rgb(59, 89, 152)` |
| `$blue-550` | `rgb(0, 123, 255)` |
| `$blue-520` | `rgb(0, 120, 212)` |
| `$blue-510` | `rgb(0, 120, 215)` |
| `$blue-500` | `rgb(44, 159, 198)` |
| `$blue-480` | `rgb(55, 118, 171)` |
| `$blue-460` | `rgb(74, 144, 226)` |
| `$blue-450` | `rgb(52, 152, 216)` |
| `$blue-420` | `rgb(0, 132, 255)` |
| `$blue-400` | `rgb(96, 165, 250)` |
| `$blue-350` | `rgb(110, 147, 171)` |
| `$blue-300` | `rgb(92, 201, 238)` |
| `$blue-200` | `rgb(203, 221, 238)` |
| `$blue-100` | `rgb(187, 220, 238)` |
| `$blue-50` | `rgb(243, 249, 252)` |
| `$blue-900-alpha30` | `rgba(30, 58, 138, .3)` |
| `$blue-500-alpha40` | `rgba(59, 130, 246, .4)` |
| `$blue-cyan-alpha60` | `rgba(0, 191, 255, .6)` |

### Cyan Spectrum
| Token | RGB / RGBA Value |
|---|---|
| `$cyan-500` | `rgb(0, 173, 216)` |
| `$cyan-400` | `rgb(34, 211, 238)` |
| `$cyan-100` | `rgb(203, 244, 252)` |
| `$cyan-900-alpha30` | `rgba(22, 78, 99, .3)` |
| `$cyan-500-alpha40` | `rgba(6, 182, 212, .4)` |

### Rose & Pink Spectrum
| Token | RGB / RGBA Value |
|---|---|
| `$rose-700` | `rgb(190, 72, 151)` |
| `$rose-400` | `rgb(251, 113, 133)` |
| `$rose-50` | `rgb(253, 249, 251)` |
| `$rose-900-alpha30` | `rgba(136, 19, 55, .3)` |
| `$rose-500-alpha40` | `rgba(244, 63, 94, .4)` |
| `$pink-400` | `rgb(244, 114, 182)` |
| `$pink-900-alpha30` | `rgba(131, 24, 67, .3)` |
| `$pink-500-alpha40` | `rgba(236, 72, 153, .4)` |

### Coral, Orange & Amber Spectrum
| Token | RGB / RGBA Value |
|---|---|
| `$coral-600` | `rgb(204, 85, 102)` |
| `$coral-500` | `rgb(250, 116, 101)` |
| `$coral-400` | `rgb(231, 113, 125)` |
| `$salmon-400` | `rgb(255, 119, 119)` |
| `$tomato-500` | `rgb(255, 99, 71)` |
| `$brown-800` | `rgb(89, 61, 43)` |
| `$orange-800` | `rgb(154, 52, 18)` |
| `$orange-650` | `rgb(233, 84, 32)` |
| `$orange-600` | `rgb(229, 119, 30)` |
| `$orange-550` | `rgb(255, 140, 0)` |
| `$orange-500` | `rgb(238, 140, 43)` |
| `$orange-450` | `rgb(245, 166, 35)` |
| `$orange-400` | `rgb(251, 146, 60)` |
| `$orange-350` | `rgb(245, 185, 69)` |
| `$orange-300` | `rgb(238, 177, 138)` |
| `$orange-250` | `rgb(255, 204, 152)` |
| `$orange-200` | `rgb(254, 215, 170)` |
| `$orange-950-alpha80` | `rgba(67, 20, 7, .8)` |
| `$orange-900-alpha30` | `rgba(124, 45, 18, .3)` |
| `$orange-600-alpha20` | `rgba(234, 88, 12, .2)` |
| `$orange-500-alpha40` | `rgba(249, 115, 22, .4)` |
| `$orange-500-alpha50` | `rgba(249, 115, 22, .5)` |
| `$orange-500-alpha60` | `rgba(249, 115, 22, .6)` |
| `$amber-800` | `rgb(120, 53, 15)` |
| `$amber-400` | `rgb(255, 193, 7)` |
| `$amber-300` | `rgb(252, 211, 77)` |
| `$yellow-400` | `rgb(251, 191, 36)` |
| `$yellow-350` | `rgb(247, 223, 30)` |
| `$yellow-300` | `rgb(230, 193, 92)` |
| `$yellow-200` | `rgb(255, 227, 128)` |
| `$yellow-900-alpha30` | `rgba(120, 53, 15, .3)` |
| `$yellow-500-alpha40` | `rgba(245, 158, 11, .4)` |

### Red & Crimson Spectrum
| Token | RGB / RGBA Value |
|---|---|
| `$red-900` | `rgb(208, 2, 27)` |
| `$red-850` | `rgb(179, 32, 36)` |
| `$red-800` | `rgb(153, 27, 27)` |
| `$red-700` | `rgb(179, 34, 20)` |
| `$red-600` | `rgb(220, 53, 69)` |
| `$red-550` | `rgb(217, 83, 79)` |
| `$red-500` | `rgb(255, 0, 0)` |
| `$red-200` | `rgb(254, 202, 202)` |
| `$crimson-900` | `rgb(159, 18, 57)` |
| `$crimson-800` | `rgb(168, 45, 57)` |
| `$red-hover-dark` | `rgb(120, 6, 6)` |
| `$red-alpha80` | `rgba(204, 41, 39, .8)` |
| `$red-alpha60` | `rgba(255, 0, 0, .6)` |
| `$red-950-alpha80` | `rgba(69, 10, 10, .8)` |
| `$red-600-alpha20` | `rgba(220, 38, 38, .2)` |
| `$red-500-alpha50` | `rgba(239, 68, 68, .5)` |
| `$red-500-alpha60` | `rgba(239, 68, 68, .6)` |

### Green, Emerald & Teal Spectrum
| Token | RGB / RGBA Value |
|---|---|
| `$teal-800` | `rgb(30, 90, 92)` |
| `$teal-500` | `rgb(95, 158, 160)` |
| `$teal-400` | `rgb(45, 212, 191)` |
| `$teal-350` | `rgb(80, 227, 194)` |
| `$green-850` | `rgb(23, 134, 0)` |
| `$green-800` | `rgb(22, 101, 52)` |
| `$green-600` | `rgb(25, 135, 84)` |
| `$green-550` | `rgb(40, 167, 69)` |
| `$mint-300` | `rgb(110, 231, 183)` |
| `$spring-300` | `rgb(134, 239, 172)` |
| `$emerald-400` | `rgb(52, 211, 153)` |
| `$emerald-350` | `rgb(109, 222, 157)` |
| `$emerald-300` | `rgb(0, 255, 159)` |
| `$lime-400` | `rgb(160, 255, 0)` |
| `$lime-350` | `rgb(78, 254, 9)` |
| `$lime-300` | `rgb(181, 215, 81)` |
| `$green-light-tint` | `rgb(231, 243, 243)` |
| `$teal-900-alpha30` | `rgba(19, 78, 74, .3)` |
| `$emerald-900-alpha30` | `rgba(6, 78, 59, .3)` |
| `$teal-500-alpha40` | `rgba(20, 184, 166, .4)` |
| `$green-500-alpha15` | `rgba(34, 197, 94, .15)` |
| `$green-400-alpha50` | `rgba(74, 222, 128, .5)` |
| `$emerald-500-alpha40` | `rgba(16, 185, 129, .4)` |

### Purple, Violet & Indigo Spectrum
| Token | RGB / RGBA Value |
|---|---|
| `$indigo-600` | `rgb(79, 70, 229)` |
| `$indigo-550` | `rgb(88, 101, 242)` |
| `$indigo-400` | `rgb(129, 140, 248)` |
| `$indigo-300` | `rgb(165, 180, 252)` |
| `$purple-700` | `rgb(193, 53, 132)` |
| `$purple-650` | `rgb(144, 19, 254)` |
| `$purple-600` | `rgb(115, 79, 150)` |
| `$purple-550` | `rgb(81, 43, 212)` |
| `$purple-500` | `rgb(155, 89, 182)` |
| `$purple-400` | `rgb(192, 132, 252)` |
| `$purple-300` | `rgb(216, 180, 254)` |
| `$violet-400` | `rgb(167, 139, 250)` |
| `$slate-blue-400` | `rgb(123, 104, 238)` |
| `$lavender-100` | `rgb(230, 230, 250)` |
| `$violet-900-alpha30` | `rgba(76, 29, 149, .3)` |
| `$purple-900-alpha30` | `rgba(88, 28, 135, .3)` |
| `$indigo-900-alpha30` | `rgba(49, 46, 129, .3)` |
| `$purple-500-alpha40` | `rgba(168, 85, 247, .4)` |
| `$violet-500-alpha40` | `rgba(139, 92, 246, .4)` |
| `$indigo-500-alpha40` | `rgba(99, 102, 241, .4)` |

### Gray, Slate & Neutral Spectrum
| Token | RGB / RGBA Value |
|---|---|
| `$gray-900` | `rgb(40, 40, 40)` |
| `$gray-850` | `rgb(45, 45, 45)` |
| `$gray-800` | `rgb(60, 60, 60)` |
| `$gray-700` | `rgb(64, 64, 64)` |
| `$gray-600` | `rgb(105, 105, 105)` |
| `$gray-550` | `rgb(110, 110, 110)` |
| `$gray-500` | `rgb(120, 120, 120)` |
| `$gray-400` | `rgb(168, 185, 204)` |
| `$gray-300` | `rgb(204, 204, 204)` |
| `$silver-100` | `rgb(245, 245, 247)` |
| `$slate-950` | `rgb(2, 6, 23)` |
| `$slate-900` | `rgb(15, 23, 42)` |
| `$slate-800` | `rgb(30, 41, 59)` |
| `$slate-700` | `rgb(51, 65, 85)` |
| `$slate-600` | `rgb(71, 85, 105)` |
| `$slate-400` | `rgb(148, 163, 184)` |
| `$slate-300` | `rgb(203, 213, 225)` |
| `$slate-100` | `rgb(245, 245, 245)` |
| `$slate-75` | `rgb(242, 242, 242)` |
| `$slate-50` | `rgb(252, 252, 252)` |
| `$slate-25` | `rgb(255, 248, 241)` |
| `$cream-50` | `rgb(252, 245, 235)` |
| `$pure-white` | `rgb(255, 255, 255)` |

### Black & Transparency Levels
| Token | RGB / RGBA Value |
|---|---|
| `$black-900` | `rgb(13, 13, 13)` |
| `$black-alpha20` | `rgba(0, 0, 0, .2)` |
| `$black-alpha40` | `rgba(0, 0, 0, .4)` |
| `$black-alpha60` | `rgba(0, 0, 0, .6)` |

---

## 2. Semantic Aliases & Submodules

### Alerts (`src/color/_alerts.sass`)
| Semantic Alias | Mapped Base Token |
|---|---|
| `$error` | `base.$red-600` |
| `$warning` | `base.$amber-400` |
| `$success` | `base.$green-600` |
| `$info` | `base.$blue-900` |
| `$disabled` | `rgba(base.$gray-700, .82)` |

### Accent Colors (`src/color/accents/_index.sass`)
| Semantic Alias | Mapped Base Token |
|---|---|
| `$accent-salmon` | `base.$salmon-400` |
| `$accent-lavender` | `base.$lavender-100` |
| `$accent-slate-blue` | `base.$slate-blue-400` |

### Brands (`src/color/brands/_index.sass`)
| Brand Group | Semantic Alias | Mapped Base Token |
|---|---|---|
| **GitHub** | `$github-gray` | `base.$gray-600` |
| | `$github-gray-active` | `base.$gray-850` |
| | `$github-gray-hover` | `base.$gray-500` |
| | `$github-light-green` | `base.$green-light-tint` |
| **Discord** | `$discord-blue` | `base.$indigo-550` |
| | `$discord-blue-hover` | `rgba(base.$indigo-550, .8)` |
| | `$discord-blue-active` | `rgba(base.$indigo-550, .6)` |
| **Facebook** | `$facebook-blue` | `base.$blue-580` |
| | `$facebook-blue-hover` | `rgba(base.$blue-580, .8)` |
| | `$facebook-blue-active` | `rgba(base.$blue-580, .6)` |
| **Instagram** | `$instagram-purple` | `base.$purple-700` |
| | `$instagram-purple-hover` | `rgba(base.$purple-700, .8)` |
| | `$instagram-purple-active` | `rgba(base.$purple-700, .6)` |
| **Messenger** | `$messenger-blue` | `base.$blue-420` |
| | `$messenger-blue-hover` | `rgba(base.$blue-420, .8)` |
| | `$messenger-blue-active` | `rgba(base.$blue-420, .6)` |
| **YouTube** | `$youtube-red` | `base.$red-500` |
| | `$youtube-red-hover` | `base.$red-hover-dark` |
| | `$youtube-red-active` | `rgba(base.$red-500, .6)` |
| **LinkedIn** | `$linked-in-blue` | `base.$blue-750` |
| | `$linked-in-blue-active` | `base.$blue-740` |
| | `$linked-in-blue-hover` | `base.$blue-730` |
| **Lumina** | `$lumina-blue` | `base.$blue-450` |
| | `$lumina-logo-red` | `base.$red-700` |
| | `$lumina-sea-green` | `base.$teal-500` |
| | `$lumina-dark-orange` | `base.$coral-600` |
| | `$lumina-light-orange` | `base.$coral-400` |
| | `$lumina-deep-midnight-blue` | `base.$blue-900` |

### Icon Colors (`src/color/icons/_index.sass`)
| Semantic Alias | Mapped Base Token |
|---|---|
| `$pdf-red` | `base.$red-550` |
| `$email-red` | `base.$tomato-500` |
| `$code-blue` | `base.$blue-550` |
| `$globe-green` | `base.$green-550` |
| `$files-yellow` | `base.$amber-400` |

### Miscellaneous System Colors (`src/color/misc/_index.sass`)
| Semantic Alias | Mapped Base Token |
|---|---|
| `$linux-orange` | `base.$orange-650` |
| `$windows-blue` | `base.$blue-520` |
| `$misc-purple` | `base.$purple-500` |
| `$rd-lime-green` | `base.$lime-400` |
| `$macos-silver` | `base.$silver-100` |
| `$fullstack-vibrant-orange` | `base.$orange-550` |
| `$human-emerald-glow` | `base.$emerald-300` |

### Neutral & Text Palette (`src/color/neutral/_index.sass`)
| Semantic Alias | Mapped Base Token |
|---|---|
| `$neutral-white` | `base.$slate-100` |
| `$neutral-off-white` | `base.$slate-50` |
| `$neutral-soft-white` | `base.$slate-25` |
| `$neutral-white-mute` | `base.$slate-75` |
| `$text-light-1` | `base.$gray-800` |
| `$text-dark-grey` | `base.$gray-900` |
| `$text-light-2` | `rgba(base.$gray-800, .66)` |
| `$text-base-dark-grey` | `base.$gray-700` |

### Palette – Groovy 70s (`src/color/palette/groovy-70s/_index.sass`)
| Semantic Alias | Mapped Base Token |
|---|---|
| `$groovy-70s-earth-brown` | `base.$brown-800` |
| `$groovy-70s-burnt-orange` | `base.$orange-600` |
| `$groovy-70s-avocado-green` | `base.$lime-300` |
| `$groovy-70s-mustard-yellow` | `base.$yellow-300` |
| `$groovy-70s-cream` | `base.$cream-50` |
| `$groovy-70s-off-white` | `base.$slate-100` |
| `$groovy-70s-warm-white` | `base.$slate-25` |
| `$groovy-70s-muted-white` | `base.$slate-75` |
| `$groovy-70s-charcoal` | `base.$gray-800` |
| `$groovy-70s-charcoal-muted` | `rgba(base.$gray-800, .66)` |

### Technology Stacks (`src/color/stacks/_index.sass`)
| Category | Semantic Alias | Mapped Base Token |
|---|---|---|
| **Compiled** | `$cplus-blue` | `base.$blue-650` |
| | `$c-silver` | `base.$gray-400` |
| | `$fortran-purple` | `base.$purple-600` |
| | `$compiled-orange` | `base.$orange-500` |
| | `$compiled-light-orange` | `base.$orange-300` |
| **Interpreted** | `$go-teal` | `base.$cyan-500` |
| | `$microsoft-green` | `base.$green-850` |
| | `$typescript-blue` | `base.$purple-550` |
| | `$microsoft-purple` | `base.$purple-550` |
| | `$cyan-blue-azure` | `base.$blue-480` |
| | `$javascript-yellow` | `base.$yellow-350` |
| | `$interpreted-light-green` | `base.$emerald-350` |
| **Database** | `$db-red` | `base.$red-alpha80` |
| | `$db-light-red` | `base.$red-alpha60` |
| **Workflow** | `$workflow-blue` | `base.$blue-350` |
| | `$jupyter-peach` | `base.$orange-250` |
| | `$workflow-light-blue` | `base.$blue-cyan-alpha60` |
| **Scripting** | `$lua-blue` | `base.$blue-750` |
| | `$shell-green` | `base.$lime-350` |
| | `$powershell-blue` | `base.$blue-850` |
| | `$scripting-light-yellow` | `base.$yellow-200` |
| **Templating** | `$meson-red` | `base.$red-850` |
| | `$jinja-red` | `base.$red-850` |
| | `$roff-grey` | `base.$gray-550` |
| | `$smarty-orange` | `base.$orange-350` |
| | `$frontend-sky-blue` | `base.$blue-300` |

### Overlay (`src/color/_overlay.sass`)
| Semantic Alias | Mapped Base Token |
|---|---|
| `$overlay-trans-black` | `base.$black-900` |
