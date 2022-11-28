import { useEffect, useState } from "react"

export const FormGroup = ({label, getValue}) => {
    const [val, setVal] = useState()

    useEffect(() => {
        getValue(val)
    }, [val])

    return (
        <>
            <label>{label}
                <input onChange={(e) => setVal(e.target.value)} />
            </label>
        </>
    )
}