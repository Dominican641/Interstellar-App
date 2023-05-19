<p align="center"><img src="https://raw.githubusercontent.com/titaniumnetwork-dev/Ultraviolet-Static/main/public/uv.png" height="200"></p>

<h1 align="center">Ultraviolet-Vercel</h1>

Static files/assets used to spin up an Ultraviolet website on vercel.app.

### Guide
fork this, go on vercel, then start a project with this, then go to build and output settings, then change the output directory to public
### Bare server

You will need to point your Bare server to an external one/a different directory (if you're using reverse proxy software).

1. Open `public/uv/config.js`
2. Find the `bare` field
3. Replace `"/bare/"` with the address of your Bare server
   A Bare server address hosts the Bare server. For example, to use the Holy Unblocker Bare server at https://uv.holyubofficial.net/ you would update your config to look like this:

   ```js
       bare: "https://uv.holyubofficial.net/",
   ```

   You can open Bare server addresses in your browser. You should see something containing fields like the project description, memory usage, supported versions, and the runtime/language.
