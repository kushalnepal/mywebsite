import './Button.css'
export const Button = (props) => {
    const disabledLabel = props.disabledLabel || 'submitting...'
    const enabledLabel = props.enabledLabel || 'submit'

    let btn = props.isSubmitting
        ? <button disabled className="btn btn-info m-t-15">{disabledLabel}</button>
        : <button disabled={props.isDisabaled} type="submit" className="btn btn-primary m-t-15">{enabledLabel}</button>

    return btn;
}
