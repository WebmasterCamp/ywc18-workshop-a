import { onValue, Reference } from 'firebase/database'
import { useEffect, useState } from 'react'

export function useObject<T>(ref: Reference) {
  const [value, setValue] = useState<T | null>(null)

  useEffect(() => {
    return onValue(ref, (snapshot) => {
      setValue(snapshot.val())
    })
  }, [ref])

  return value
}
