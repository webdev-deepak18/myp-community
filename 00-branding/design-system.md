# Visual Design Specification

## Overview
This document serves as the single source of truth for the **000-myp-community** visual design system, extracted from and 100% verified against [design-system.pdf](file:///e:/HR/000-myp-community/00-branding/design-system.pdf).

The design sheet follows a 3-column specification: `Type`, `Attributes`, and `Example`.

---

## 1. Typography

### Font Families
| Token / Role | Font Family |
| :--- | :--- |
| **Heading 1** | `Inria Serif` |
| **Heading 2** | `Inter` |
| **Body text** | `Roboto` |

### Type Scale
| Level | Font Family | Size | Weight | Line Height | Letter Spacing |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero 1** | Inria Serif | 56px | Bold (700) | 64px | -0.25px |
| **Hero 2** | Inter | 48px | Semi Bold (600) | 56px | -0.25px |
| **H1** | Inria Serif | 40px | Bold (700) | 48px | -0.25px |
| **H2** | Inria Serif | 36px | Bold (700) | 44px | -0.25px |
| **H3** | Inter | 32px | Semi Bold (600) | 40px | 0px |
| **H4** | Inter | 28px | Semi Bold (600) | 36px | 0px |
| **H5** | Roboto | 24px | Medium (500) | 32px | 0px |
| **H6** | Roboto | 20px | Medium (500) | 38px | 0px |
| **Body Text** | Roboto | 14px | Regular (400) | 22px | 0px |
| **Body Text Large** | Roboto | 16px | Medium (500) | 24px | 0px |
| **Body Text Small** | Roboto | 13px | Regular (400) | 20px | 0px |
| **Body Text Extra Small** | Roboto | 12px | Regular (400) | 16px | 0px |
| **Paragraph Large** | Roboto | 18px | Regular (400) | 32px | 0px |
| **Paragraph Medium** | Roboto | 16px | Regular (400) | 28px | 0px |
| **Paragraph Small** | Roboto | 14px | Regular (400) | 24px | 0px |
| **Form Label** | Roboto | 14px | Medium (500) | 24px | 0px |
| **Form Label Large** | Roboto | 20px | Regular (400) | 28px | 0px |

---

## 2. Color System

### Generic Colors
| Token | Hex Value | Description |
| :--- | :--- | :--- |
| `Page-BG` | `#FFFCF8` | Warm Off-White / Canvas background |
| `Text` | `#000000` | Primary base text |
| `Text Link` | `#02588E` | Interactive text & link blue |
| `Border` | `#CCCCCC` | Standard divider & element border |
| `White` | `#FFFFFF` | Card surfaces & pure white elements |
| `Black` | `#000000` | Pure black |

### Primary 1: MP-Green (`#02A82D`)
| Token | Hex Value | Usage |
| :--- | :--- | :--- |
| `MP-Green 50` | `#F2FBF5` | Lightest surface tint |
| `MP-Green 100` | `#E5F6E9` | Success / Light green background |
| `MP-Green 200` | `#CBEED5` | Light border / badge accent |
| `MP-Green 300` | `#98DCAB` | Muted green accent |
| `MP-Green 400` | `#66CB81` | Mid green tint |
| `MP-Green 500` | `#34B957` | Vibrant green |
| `MP-Green Default` | `#02A82D` | Primary brand green |
| `MP-Green 700` | `#018624` | Primary button default |
| `MP-Green 800` | `#00651B` | Primary button hover |
| `MP-Green 900` | `#004213` | Deepest brand green |

### Primary 2: MP-Blue (`#396B7E`)
| Token | Hex Value | Usage |
| :--- | :--- | :--- |
| `MP-Blue 50` | `#F5F7F8` | Slate tint surface |
| `MP-Blue 100` | `#EBF0F2` | Subtle blue-gray background |
| `MP-Blue 200` | `#D7E1E3` | Muted slate border |
| `MP-Blue 300` | `#AFC4CB` | Secondary blue-gray accent |
| `MP-Blue 400` | `#88A6B1` | Medium slate |
| `MP-Blue 500` | `#608897` | Slate blue accent |
| `MP-Blue Default` | `#396B7E` | Secondary brand slate |
| `MP-Blue 700` | `#2D5564` | Dark slate blue |
| `MP-Blue 800` | `#22404B` | Deep slate |
| `MP-Blue 900` | `#162B32` | Darkest slate tone |

### Semantic Colors
| State | BG Token & Value | Border Token & Value | Text Token & Value |
| :--- | :--- | :--- | :--- |
| **Success (Green)** | `Success-BG`: `#E5F6E9` | `Success-Border`: `#28C841` | `Success-Text`: `#018624` |
| **Error (Red)** | `Error-BG`: `#FFE3E3` | `Error-Border`: `#E06764` | `Error-Text`: `#E13838` |
| **Alert (Orange)** | `Alert-BG`: `#FFF4E5` | `Alert-Border`: `#FCBE67` | `Alert-Text`: `#FB9302` |
| **Edit / Info (Blue)** | `Edit-BG`: `#E8F2FD` | `Edit-Border`: `#5099EC` | `Edit-Text`: `#1E66BA` |

### Neutral / Black Scale
| Token | Hex Value | Purpose |
| :--- | :--- | :--- |
| `Black 50` | `#F2F2F2` | Secondary button default, disabled BG, TH background |
| `Black 100` | `#E4E4E4` | Secondary button hover / focus |
| `Black 200` | `#CCCCCC` | Disabled buttons, default inputs & card borders |
| `Black 300` | `#999999` | Placeholder text, help text, disabled label text |
| `Black 400` | `#666666` | Form label default, checkbox/radio default text |
| `Black 500` | `#333333` | Dark neutral text |
| `Default` | `#000000` | Active form label & strong text |

---

## 3. Component Specifications

### 3.1 Button System

#### General Properties
- **Border Radius**: `12px`
- **Gap between icon and label**: `12px`
- **Font Family**: `Roboto`

#### Button Sizes
| Size | Height | Padding | Font Size | Font Weight |
| :--- | :--- | :--- | :--- | :--- |
| **Large** | `60px` | `24px 20px` | `16px` | Medium (500) |
| **Medium** | `50px` | `20px 12px` | `14px` | Medium (500) |
| **Small** | `40px` | `12px 12px` | `12px` | Medium (500) |

#### Button Variants & States
| Variant | State | Background | Border | Text / Icon Color |
| :--- | :--- | :--- | :--- | :--- |
| **Primary** | Default | `#018624` (MP-Green 700) | None | `#FFFFFF` |
| | Hover | `#00651B` (MP-Green 800) | None | `#FFFFFF` |
| | Focus | `#02A82D` (MP-Green Default) | None | `#FFFFFF` |
| | Disabled | `#CCCCCC` (Black 200) | None | `#FFFFFF` |
| **Secondary** | Default | `#F2F2F2` (Black 50) | None | `#000000` |
| | Hover | `#E4E4E4` (Black 100) | None | `#000000` |
| | Focus | `#E4E4E4` (Black 100) | None | `#000000` |
| | Disabled | `#CCCCCC` (Black 200) | None | `#FFFFFF` |
| **Bordered** | Default | `#FFFFFF` | `2px solid #000000` | `#000000` |
| | Hover | `#FFF4E5` (Alert-BG) | `2px solid #000000` | `#000000` |
| | Focus | `#F5F7F8` (MP-Blue 50) | `2px solid #000000` | `#000000` |
| | Disabled | `#CCCCCC` (Black 200) | None | `#FFFFFF` |

#### Icon Buttons
- **Shapes**: Circular (`border-radius: 50%`) and Rounded-Square (`border-radius: 12px`).
- **Sizes**: Large (`60x60px`), Medium (`50x50px`), Small (`40x40px`).
- **Tiers**:
  1. *Primary (Green)*: Default `#018624`, Hover `#00651B`, Focus `#02A82D`, Disabled `#CCCCCC` (White icon).
  2. *Secondary (Neutral)*: Default `#F2F2F2`, Hover `#E4E4E4`, Focus `#E4E4E4`, Disabled `#CCCCCC` (Black icon / White disabled).
  3. *Bordered (White/Tint)*: Default `#FFFFFF` (border 2px `#000000`), Hover `#FFF4E5`, Focus `#F5F7F8`, Disabled `#CCCCCC` (no border).

---

### 3.2 Form Controls & Inputs

#### Input Fields / Input Box
- **Height**: `50px`
- **Padding**: `12px`
- **Border Radius**: `12px`
- **Typography**: Roboto, `14px`, Regular (400)
- **Icon Size**: `24px X 24px` | **Gap**: `12px`

| State | Background | Border | Text / Placeholder Color |
| :--- | :--- | :--- | :--- |
| **Default** | `#FFFFFF` | `1px solid #CCCCCC` | `#999999` (Placeholder) |
| **Focus** | `#FFFFFF` | `1px solid #5099EC` (Edit-Border) | `#000000` |
| **Error** | `#FFFFFF` | `1px solid #E06764` (Error-Border) | `#000000` |
| **Disabled** | `#F2F2F2` | `1px solid #CCCCCC` | `#666666` |

#### Form Labels & Supporting Text
- **Field Label**: Roboto, `14px`, Medium (500), Color: `#000000`.
- **Mandatory Indicator**: Roboto, `13px`, Regular (400), Color: `#E13838` (Error-Text).
- **Help Text**: Roboto, `12px`, Regular (400), Color: `#999999`, Text-align: `left`.
- **Character Count Text**: Roboto, `12px`, Regular (400), Color: `#999999`, Text-align: `right`.

#### Checkbox
- **Dimensions**: Height `50px`, Padding `12px`, Icon Size `24px X 24px`.
- **Typography**: Roboto, `14px`, Medium (500).
- **States**:
  - `Default`: Label Color `#666666`
  - `Active`: Label Color `#000000`
  - `Disabled`: Label Color `#999999`

#### Radio Button
- **Dimensions**: Height `50px`, Padding `12px`, Icon Size `24px X 24px`.
- **Typography**: Roboto, `14px`, Medium (500).
- **States**:
  - `Default`: Label Color `#666666`
  - `Active`: Label Color `#000000`
  - `Disabled`: Label Color `#999999`

#### Switch (Toggle)
- **Field Label**: Roboto, `14px`, Medium (500), Color: `#000000`.
- **Icon Size**: `24px X 24px`.
- **States**:
  - `Switch Off`: Label Color `#666666`
  - `Switch On`: Label Color `#000000`
- **Layout**: `Yes [ Toggle Switch ] No`

---

### 3.3 Accordion

- **Container Height**: `70px`
- **Padding**: `16px 12px`
- **Border Radius**: `16px`
- **Border**: `1px solid #CCCCCC`
- **Typography**: Roboto, `14px`, Medium (500), Color: `#000000`
- **Left Icon Area**: `40px X 40px` (Icon: `16px X 16px`)
- **Right Icon Area**: `40px X 40px` (Icon: `16px X 16px`)
- **States**:
  - `Default (Collapsed)`: Container Background: `#F5F5F5` (Black 50), Right Icon: `arrow-right`
  - `Active (Expanded)`: Container Background: `#FFFFFF`, Right Icon: `arrow-up` (Green circular badge with white arrow)
- **Collapsible Body Content**: Roboto, `14px`, Regular (400), Color: `#000000`.

---

### 3.4 Tags and Status Pills

- **Height**: `40px`
- **Padding**: `12px 8px`
- **Border Radius**: `12px` (Rounded rectangle)
- **Icon Size**: `20px X 20px`
- **Typography**: Roboto, `14px`, Regular (400), Color: `#000000` (for all variants)
- **Structure**: Left circular icon + `Tag Name (Group_name_002)` + Right `+` action icon.

| Variant / State | Container Background | Container Border | Text Color |
| :--- | :--- | :--- | :--- |
| **Default (Neutral)** | `#F5F5F5` (Black 50) | `#CCCCCC` | `#000000` |
| **Success** | `#E5F6E9` (Success-BG) | `#28C841` (Success-Border) | `#000000` |
| **Alert** | `#FFF4E5` (Alert-BG) | `#FCBE67` (Alert-Border) | `#000000` |
| **In Progress / Edit** | `#E8F2FD` (Edit-BG) | `#5099EC` (Edit-Border) | `#000000` |

---

### 3.5 Table

- **Row Height**: `50px`
- **Padding**: `12px 12px`
- **Gap**: `12px`
- **Border Radius**: `0px`

| Element | Background | Bottom Border | Typography | Icon Size |
| :--- | :--- | :--- | :--- | :--- |
| **Table Header (TH)** | `#F2F2F2` (Black 50) | `Solid 2px #28C841` | Roboto, `14px`, Medium (500), `#000000` | `20px X 20px` |
| **Table Data (TD)** | `#FFFFFF` | `Solid 1px #CCCCCC` | Roboto, `14px`, Regular (400), `#000000` | - |
