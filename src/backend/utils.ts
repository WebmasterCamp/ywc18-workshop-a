import firebase from 'firebase/app'
import { useEffect, useState } from 'react'

export function useObject<T>(ref: firebase.database.Reference) {
  const [value, setValue] = useState<T | null>(null)

  useEffect(() => {
    const callback = (snapshot: firebase.database.DataSnapshot) => {
      setValue(snapshot.val())
    }
    ref.on('value', callback)
    return () => ref.off('value', callback)
  }, [ref])

  return value
}

export function sortByValue(
  object: Record<string, number>,
  desc: boolean = false
): string[] {
  return Object.keys(object)
    .map((key) => ({ key, value: object[key] }))
    .sort((a, b) => (desc ? b.value - a.value : a.value - b.value))
    .map(({ key }) => key)
}
