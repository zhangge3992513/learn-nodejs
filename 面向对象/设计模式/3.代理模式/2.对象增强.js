function createProxy(subject) {
  const helloOrig = subject.hello;
  subject.hello = () => `${helloOrig.call(subject)} world!`;
  return subject;
}
