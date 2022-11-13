/**
 * Debounce execution of a function.
 *
 * @see https://vueuse.org/useDebounceFn
 * @param  fn          A function to be executed after delay milliseconds debounced.
 * @param  ms          A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
 * @param  opts        options
 *
 * @return A new, debounce, function.
 */
export declare function useDebounceFn<T extends FunctionArgs>(
  fn: T,
  ms?: MaybeComputedRef<number>,
  options?: DebounceFilterOptions
): T

export declare function onStartTyping(
    callback: (event: KeyboardEvent) => void,
    options?: ConfigurableDocument
  ): void