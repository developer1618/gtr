export default function ({ $axios }) {
  $axios.onRequest((config) => {
    if (localStorage.getItem("token")) {
      $axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${localStorage.getItem("token")}`;
    }
  });
}
