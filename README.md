# Proxy server
  A proxy server acts as an intermediary between a client requesting a resource and the server providing that resource. In simple terms, it receives requests from clients, forwards these requests to the target server, receives the server's response, and then forwards the response back to the client. 

## Prerequisites
  - Node(Express)
  - http-proxy(package)


## Getting Started

1. Clone the repository.
2. Install all required dependencies.
     ```sh
       npm install express http-proxy nodemon
     ```
3. Run the sever
    ```sh
      npm start
    ```

## Testing the proxy server
  we can test the working of proxy server with different methods:

  ### Using Postman :
  1. Open Postman.
  2. Go to Settings (the gear icon in the top right corner).
  3. Under the Proxy tab, enable the proxy and set the proxy server to `localhost` and the port to `3000`.
  4. Send a request to any URL (e.g., `http://example.com`).
  5. The request should go through the proxy server, and you should see the response from the target server.
  6. You should see the logs in the terminal like :
      `Proxying request for: http://example.com` . Which tells that the request is handled by your proxy server.

  ### Using Web Browser :
  #### For Chrome:
  1. Go to Settings.
  2. Search for proxy and click on Open your computer's proxy settings.
  3. In the proxy settings, configure the HTTP proxy to `localhost` and the port to `3000`.
  #### For Firefox:
  1. Go to Settings.
  2. Scroll down to Network Settings and click on Settings.
  3. Select Manual proxy configuration.
  4. Set HTTP Proxy to `localhost` and port to `3000`.

  => Open any website (e.g., `http://example.com`). The request should go through the proxy server, and you should see the response from the target server.
  
      
