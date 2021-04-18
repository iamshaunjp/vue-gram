import { ref, watchEffect } from 'vue'
import { projectStorage } from '../firebase/config'

const useStorage = (file) => {
  const error = ref(null)
  const url = ref(null)
  const progress = ref(null)

  watchEffect(() => {
    // references
    const storageRef = projectStorage.ref('images/' + file.name)

    // upload the file
    storageRef.put(file).on('state_changed', (snap) => {
      // upadte the progress as file uploads
      let percentage = (snap.bytesTransferred / snap.totalBytes) * 100
      progress.value = percentage
      console.log(progress.value + ' % uploaded')
    }, 
    (err) => {
      error.value = err
    }, 
    async () => {
      // get the dl url & make firestore doc
      const dlUrl = await storageRef.getDownloadURL()
      url.value = dlUrl
    })
  })

  return { progress, url, error }
}

export default useStorage