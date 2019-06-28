## Pipes

#### Step 1: Create an Angular project

#### Step 2: Add the variables in app.component.ts
```javascript
export class AppComponent {

  title = 'pipe-demo';
  currentDate = new Date();
  products= [ {"id":1,
  "name":"Dell"}];
}
```
#### Step 3: Display the data in app.component.html
```
<h3>Default Date</h3>
Current Date : {{currentDate}}
<h3>DatePipe (default)</h3>
Current Date : {{currentDate | date}}
<h3>DatePipe(short)</h3>
Current Date : {{currentDate | date:'short'}}
<h3>DatePipe (medium)</h3>
Current Date : {{currentDate | date:'medium'}}

<br/>
<h3>Default Title</h3>
{{title}}
<h3>UpperCasePipe</h3>
{{title | uppercase}}

<h3>Custom Pipe</h3>
{{title |upper}}


<h3>Arrays(Default)</h3>
{{products}}
<h3>JsonPipe</h3>
{{products | json}}
````

#### Step 4: Create a Custom Pipe to transform String to UpperCase
```
ng generate pipe upper
```

##### Step 4.1 : Implement Logic for Custom Pipe - upper.pipe.ts
```
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upper'
})
export class UpperPipe implements PipeTransform {

  transform(value: string, ...args: any[]): any {
    return value.toUpperCase();
  }

}
```
#### Test Custom Pipe
```
{{title | upper}}
```
```

