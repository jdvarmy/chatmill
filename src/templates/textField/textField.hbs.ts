import css from './textField.css';

export default function textFieldHbs() {
  return `
    <div class="${css.fieldContainer}">
      <label class="${css.fieldInputLabel}">
        {{label}}
      </label>
      <div class="${css.fieldInputContainer}">
        <input type="text" name="{{input.name}}" class="${css.fieldInput}" value="">
        <fieldset class="${css.fieldFieldset}">
          <legend class="${css.fieldLegend}">
            <span>{{label}}</span>
          </legend>
        </fieldset>
      </div>
    </div>
  `;
}