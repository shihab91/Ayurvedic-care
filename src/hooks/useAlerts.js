import Swal from "sweetalert2/dist/sweetalert2.js";
const useAlerts = () => {
  const successAlert = (name) => {
    Swal.fire({
      icon: 'success',
      title: `Welcome ${name}`,
      text: 'Well done , you are now logged in .'
    })

  }
  const errorAlert = () => {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
    })
  }
  return { successAlert, errorAlert }
}
export default useAlerts;