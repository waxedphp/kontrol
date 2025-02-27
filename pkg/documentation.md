# Kontrol

Library of UI controls ; dial (was ‘knob’), XY pad, bars control …

- canvas based ; no png or jpg sprites.
- touch, mousewheel, keyboard events implemented.
- downward compatible ; overloads inputs.

[http://anthonyterrien.com/kontrol/]

License MIT and GPL.

---

### PHP

```php
  use Waxedphp\Kontrol\Setter as Kontrol;

  $obj = new Kontrol($this->waxed);
  
  $this->waxed->pick('section1')->display([
    'data' => [
      'payloadKNOB' => $obj->value(50),
      'payloadXY' => $obj->value([15, 20]),
      'payloadBARS' => $obj->value([
      15, 20, 15, 20, 15, 20, 15, 20, 15, 20, 15, 20, 15, 20, 15, 20
      ]),
  ]],$this->tpl.'/kontrol');


```

---

### HTML

```html
  <input type="text" 
    class="waxed-kontrol kontrol-knob" 
    data-width="180" data-height="180" 
    data-min=0 data-max=127 value="0" 
    data-name="data.payloadKNOB" 
    data-fgColor="lime"
  />

  <fieldset 
    class="waxed-kontrol kontrol-xy pad" 
    data-name="data.payloadXY" 
    data-width="250" 
    data-height="250" 
    data-fgColor="lime"
  >
      <legend>XY Pad</legend>
      x : <input name="x" value=27 />
      y : <input name="y" value=80 />
  </fieldset>

  <fieldset 
    class="waxed-kontrol kontrol-bars"
    data-name="data.payloadBARS"
    data-width="250"
    data-cols="16"
    data-min="-127"
    data-max="127"
    data-fgColor="lime" 
  >
      <legend>16 tracks</legend>
      <input value=90>
      <input value=40>
      <input value=-10>
      <input value=-10>
      <input value=-20>
      <input value=-20>
      <input value=-20>
      <input value=-100>
      <input value=-100>
      <input value=-20>
      <input value=-20>
      <input value=-20>
      <input value=-10>
      <input value=-10>
      <input value=40>
      <input value=90>
  </fieldset>



```
---
---
