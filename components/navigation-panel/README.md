# NavigationPanel

Ляв вертикален панел за навигация, реализиран като React компонент. Панелът пресъздава визията от предоставената навигация и е структуриран според добрите практики:

- данните за секциите и елементите са конфигурируеми;
- компонентът поддържа контролиран и неконтролиран режим за активния елемент;
- достъпен е чрез семантичен `<nav>` контейнер и `aria` атрибути;
- стиловете са инкапсулирани чрез CSS Module.

## Използване

```jsx
import { NavigationPanel } from './components/navigation-panel';

const sections = [
  {
    id: 'primary',
    title: 'Navigation',
    items: [
      { id: 'dashboard', label: 'Dashboard', icon: DashboardIcon, href: '/dashboard' },
      { id: 'reports', label: 'Reports', icon: ReportsIcon, href: '/reports', badge: 12 },
      // ...
    ],
  },
];

function App() {
  const [activeId, setActiveId] = useState('dashboard');

  return (
    <NavigationPanel
      sections={sections}
      activeItemId={activeId}
      onActiveItemChange={(item) => setActiveId(item.id)}
      onCreate={() => console.log('Create new item')}
      brand={{ initials: 'NP', name: 'Navigation Panel' }}
    />
  );
}
```

Ако не подадете `sections`, `NavigationPanel` използва вградените примерни данни, които съвпадат с навигацията от изображението.

### Свойства

| Prop | Тип | Описание |
| ---- | --- | -------- |
| `sections` | `NavigationSectionDefinition[]` | Навигационните секции и елементи. |
| `footerActions` | `NavigationItem[]` | Допълнителни действия в долната част на панела. |
| `activeItemId` | `string` | Контролиран идентификатор на активния елемент. |
| `initialActiveItemId` | `string` | Начален активен елемент при неконтролиран режим. |
| `onActiveItemChange` | `(item, event) => void` | Callback при смяна на активен елемент. |
| `brand` | `{ initials: string, name: string }` | Данни за брандинга в горната част. |
| `onCreate` | `() => void` | Обработчик за бутона с иконата „+“. |
| `className` | `string` | Допълнителен CSS клас за контейнера. |

### Структура на елементите

```ts
interface NavigationItem {
  id: string;
  label: string;
  icon: React.ElementType;
  href?: string;
  badge?: number;
  isDisabled?: boolean;
}

interface NavigationSectionDefinition {
  id: string;
  title?: string;
  items: NavigationItem[];
}
```

### Стилове

Всички стилове се намират в `NavigationPanel.module.css` и са приложени единствено към компонента чрез CSS Modules. Палитрата е подбрана така, че да бъде максимално близка до дизайна от примера, а `color-scheme: dark` на кореновия контейнер подсказва на браузъра, че панелът е в тъмен режим.
