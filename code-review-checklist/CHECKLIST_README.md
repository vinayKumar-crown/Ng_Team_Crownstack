###  Naming Conventions

- [x] Folder and File names should be: abc|abc.module.ts|.component.ts|.service.ts|.component.html|.component.scss|.pipe.ts|.guard.ts|.directive.ts|-routing.module.ts
- [x] Component Selector should be separated with '-'.
- [x] If your component selector is admin-users. Then your component class must have name AdminUsersComponent.
- [x] Naming convention for Component Element should be different from Component Template.

###  Application Structure

- [x] LIFT:
- [x] L: Locating code intuitive and fast.
- [x] I: Name the file such that you instantly know what it contains and represents.
- [x] F: Keep a flat folder structure as long as possible.
- [x] D: DRY (Don't Repeat Yourself).

###  Modules

- [x] Keep Modules Independent of all other folders.
- [x] Divide it into Feature/ Shared/ Lazy Loaded
- [x] In Module keep the Component/Services/Pipes/Guards related to that Module only.
- [x] Import and Export should be according to requirement. Don't do extras.
- [x] Try to add Provider so that we should know if Module Loaded or not.
- [x] If Module have Routing then make it Lazy Loaded.

### Components

- [x] It can be specific to Module or Individual.
- [x] Keep the naming of Component according to rules. For eq. user.component.ts|.component.html|.component.scss
- [x] Make it Dumb and Smart according to requirement.
- [x] It should be small as possible.
- [x] Individual Component export should be mentioned in index.ts or create a separate Module for that.
- [x] Component selector should be separated with '-'.
- [x] Selector prefix (app-) must be changed from angular.json not directly in component.

###  Services

- [x] Keep complex logics in the services.
- [x] Implement Http APIs in the services.
- [x] Provide service in Module Providers or make it at root level.
- [x] For common functions or common logic make one unique service with proper name.
- [x] Service name should be like user.service.ts
- [x] For Http Interceptors and APP_INITIALIZERS keep separate services.
- [x] For Http Methods make one uniqe service.

###  Guards

- [x] Auth Validation of pages handled through only Routing Guards
- [x] If any logic on before page enter and before page leaves that must be handled through Routing Guards
- [x] Routing Guards naming must be like login.guard.ts
- [x] Prepare a separate folder and keep it at root level.

###  Pipes

- [x] Pipes naming should be translate.pipe.ts
- [x] For changing the values formats use pipes instead of component functions or own logics.
- [x] Use inbuild pipes like Date, Currency, Locale, Json etc.
- [x] Keep it in Shared folder so that it can be reused in all the components.

###  Routing

- [x] Use Lazy Loaded Modules for Routing.
- [x] Use Auth Gaurds in Routing
- [x] For Children Routes use components
- [x] For each Route Page add Title and Meta tags to each page by unique service.
- [x] For showing loader for particular page loading use Routing Events like NavigationEnd, NavigationStart, NavigationCancel and NavigationError

###  Dynamic Rendering

- [x] Use Renderer2

###  Component Interaction

- [x] Use @Input and @Output
- [x] Use @ViewChildren and @ViewChild
- [x] Use services
- [x] Template Reference Variable with each element like #children

###  ng-container | ng-template | ng-content

- [x] Use ng-container when 2 Structural Directives coming on one HtmlElement
- [x] Use ng-template in *ngIf and else
- [x] Use ng-template with ng-container if in same component you are seeing small portion of repetitive code
- [x] Use ng-contnet for projecting components or templates

###  Typescript

- [x] Use let and const instead of var
- [x] Use Arrow Function instead of Function
- [x] Use Destructuring for Objects and Arrays
- [x] Create Custom Decorators
- [x] Use Spread operators

###  ESLINT

- [x] Check lint error always to keep code clean in writting.
- [x] Customize the eslint file according to requirements

###  Libraries

- [x] Keep one library only which is suitable for you.
- [x] Remove unwanted library from package.json
- [x] Don't install libraries for every small thing. Eq. Date formats you can use DatePipe instead of adding moment
- [x] Keep checking your libraries bundle size through webpack bundle analyzer.

###  Pacakge Json

- [x] Keep the commands of build | serve | test in this.

###  ENV

- [x] Maintain every global variable which changes according to URL in the env file
- [x] Keep Google Maps, Google Analytics and other libraries keys in env file.
- [x] Keep backend API URL in env file
- [x] Make separate file for each environment. Like dev, test, staging, prod

###  RxJs

- [x] Use RxJs Operators, Methods properly. Like: pipe, map, of, takeWhile, takeUntill etc

###  NgRx

- [x] Maintain one store in App
- [x] Don't add logic in actions and reducers
- [x] Use Effects and Selectors for logics.
- [x] For debugging use @ngrx/store-devtools
- [x] Keep updating state as per requirement 

###  CLI

- [x] Use CLI commands for creating Components | Modules | Services | Pipes | Guards | Directives | Classes
- [x] Use CLI to understand the build options
- [x] Change the build config options from angular.json file
- [x] Make build config option for each environement different.

### MultiLingual

- [x] Use @angular/localize
- [x] Provide the config of localize in angular.json
- [x] Maintain root level language JSON file for specific languages
- [x] Define different npm commands for compiling and extracting languages

###  Types

- [x] Keep variables data types proper. Avoid any type.
- [x] Make interfaces | Models | Enums
- [x] Define constant values in constant file

###  Security

- [x] Use interpolation ({{  }}) to safely encode potentially dangerous characters and escape untrusted HTML or CSS expressions within a template expression.  
- [x] If you must dynamically add HTML to a component, bind its generation to [innerHTML]. This ensures data will be interpreted as HTML in its context and sanitized, removing all unsafe tags  and hence preventing it from executing any malicious cross-site scripting code. Notice that the action of sanitizing is not the same as encoding.
- [x] Never use templates generated by concatenating user input
- [x] Never use native DOM APIs to interact with HTML elements
- [x] Avoid template engines on server-side templates
- [x] Scan your Angular project for components which introduce security vulnerabilities

###  Performance

- [x] Use PWA
- [x] Do OnPush Change Detection
- [x] Use Pipes instead of components methods
- [x] Cache values from pure pipes and functions
- [x] Using trackBy in ngFor
- [x] For heavy computations: Detach change detection
- [x] Lozy Load Modules
- [x] Use preloading strategy
- [x] Use AOT | IVY for build

###  Upgrade

- [x] Check the features you have in previous version exist in new version or not
- [x] Upgrade to new version if feature exist or try to find alternative for those features.
