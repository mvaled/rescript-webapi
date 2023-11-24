open Webapi.ReadableStream

module DefaultReader__test = {
  open! DefaultReader

  let test_closed = reader => closed(reader)

  let test_cancel = reader =>
    reader->cancel->Js.Promise2.then(() => "cancelled"->Js.log->Js.Promise2.resolve)

  let test_cancelWith = reader =>
    reader->cancelWith("reason")->Js.Promise2.then(reason => reason->Js.log->Js.Promise2.resolve)

  let test_releaseLock = reader => releaseLock(reader)

  let test_read = reader =>
    reader
    ->read
    ->Js.Promise2.then(next =>
      next->Webapi__Iterator.value->Belt.Option.forEach(_, Js.log)->Js.Promise2.resolve
    )
}

let test_locked = stream => locked(stream)

let test_cancel = stream => cancel(stream)

let test_cancelWith = stream => stream->cancelWith("reason")

let test_getReader = stream => getReader(stream)

let test_getReaderBYOB = stream => getReaderBYOB(stream)

let test_tee = stream => {
  let (stream1, stream2) = tee(stream)

  stream1->cancel->ignore
  stream2->cancel->ignore
}
