import * as ora from "ora"

type OraPromiseOptions<T> = {
  onSuccess?: ((result: T) => string) | string
  onError?: ((error: Error) => string) | string
  text: string
}

export const oraPromise = async <T>(
  promise: Promise<T>,
  options: OraPromiseOptions<T>,
) => {
  const { text, onError, onSuccess } = options

  const spinner = ora(text).start()

  return promise
    .catch((e) => {
      const onErrorText = typeof onError === "function" ? onError(e) : onError
      spinner.fail(onErrorText)
      throw e
    })
    .then((result) => {
      const onSuccessText =
        typeof onSuccess === "function" ? onSuccess(result) : onSuccess
      spinner.succeed(onSuccessText)
      return result
    })
}
