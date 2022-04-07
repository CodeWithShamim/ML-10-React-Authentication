# firebase authentication step.......
1. create firebase project on console.firebase.com
2. install firebase in my local project (npm install firebase)
3. Register web app in firebase
4. copy firebase init with config from firebase project settings into a file firebase.init.js
5. export default app from firebase.init.js
6. import app firebase.init.js into your app.js

7. import getAuth from firebase/auth and create const auth = getAuth(app) into app.js
8. turn on google authentication from (firebase > Authentication > sign in methid > enable google sign in)

9. create google provider into app.js using const googleProvider = new GoogleAuthProvider() import {GoogleAuthProvider} from firebase/auth
10. using signInWithPopup and pass auth & provider
11. handle .then(if successful) & .catch (if error)
