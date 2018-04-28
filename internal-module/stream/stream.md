### 流stream

#### 简介
流 `stream` 在 Node.js 中是处理流数据的抽象接口 `abstract interface` .所有的流都是 `EventEmitter` 的实例
#### 流的类型
* 可读流:`Readable`
    例如:
    
    ```
    fs.createReadStream();
    HTTP responses, on the client
    HTTP requests, on the server
    fs read streams
    zlib streams
    crypto streams
    TCP sockets
    child process 
    stdout and stderr
    process.stdin
    ```

* 可写流:`Writable`
    例如:
    
    ```
    fs.createWriteStream();
    HTTP requests, on the client
    HTTP responses, on the server
    fs write streams
    zlib streams
    crypto streams
    TCP sockets
    child process stdin
    process.stdout, process.stderr
    ```
    
* 可读可写流:`Duplex`
    例如:
    
    ```
    net.Socket;
    TCP sockets;
    zlib streams;
    crypto streams;
    ```

* 在读写过程中可以修改和变换数据的:`Duplex`流`Transform`
    例如:
    
    ```
    zlib.createDeflate();
    zlib streams;
    crypto streams;
    ```
    
#### 概念

**对象模式**`objectMode`

所有使用 Node.js API 创建的流对象都只能操作 `strings` 和 `Buffer`（或 `Uint8Array` ） 对象。但是，通过一些第三方流的实现，你依然能够处理其它类型的 JavaScript 值 (除了 `null` ，它在流处理中有特殊意义)。 这些流被认为是工作在 “对象模式”

**缓冲**

1. Writable 和 Readable 流都会将数据存储到内部的缓冲器 `buffer` 中。这些缓冲器可以 通过相应的` writable._writableState.getBuffer()` 或 `readable._readableState.buffer` 来获取。
2. 缓冲器的大小取决于传递给流构造函数的 `highWaterMark` 选项。 对于普通的流， highWaterMark 选项指定了总共的字节数。对于工作在对象模式的流， highWaterMark 指定了对象的总数。 
3. 当可读流的实现调用 stream.push(chunk) 方法时，数据被放到缓冲器中。如果流的消费者 没有调用 stream.read() 方法， 这些数据会始终存在于内部队列中，直到被消费。

4. 当内部可读缓冲器的大小达到 highWaterMark 指定的阈值时，流会暂停从底层资源读取数据，直到当前 缓冲器的数据被消费 (也就是说， 流会在内部停止调用 readable._read() 来填充可读缓冲器)。

5. 可写流通过反复调用 writable.write(chunk) 方法将数据放到缓冲器。 当内部可写缓冲器的总大小小于 highWaterMark 指定的阈值时， 调用 writable.write() 将返回true。 一旦内部缓冲器的大小达到或超过 highWaterMark ，调用 writable.write() 将返回 false 。

6. stream API 的关键目标， 尤其对于 stream.pipe() 方法， 就是限制缓冲器数据大小，以达到可接受的程度。这样，对于读写速度不匹配的源头和目标，就不会超出可用的内存大小。

7. Duplex 和 Transform 都是可读写的。 在内部，它们都维护了 两个 相互独立的缓冲器用于读和写。 在维持了合理高效的数据流的同时，也使得对于读和写可以独立进行而互不影响。 例如， net.Socket 就是 Duplex 的实例，它的可读端可以消费从套接字（socket）中接收的数据， 可写端则可以将数据写入到套接字。 由于数据写入到套接字中的速度可能比从套接字接收数据的速度快或者慢， 在读写两端使用独立缓冲器，并进行独立操作就显得很重要了。


   
### 可读流




