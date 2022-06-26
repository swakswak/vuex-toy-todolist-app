class Validator{
    isBlank(stringValue) {
        return stringValue === undefined
            || stringValue === null
            || stringValue.replace(" ", "") === "";
    }
}

export default new Validator();