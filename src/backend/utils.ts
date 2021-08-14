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
