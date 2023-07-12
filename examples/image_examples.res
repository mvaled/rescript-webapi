// question from the forum https://forum.rescript-lang.org/t/how-to-get-img-dimmensions-using-rescript/3556?u=spyder
let url = ""

open Webapi.Dom

let processImage = url => {
  Js.Promise2.make((~resolve, ~reject) => {
    // showing the process, this can be done more easily (see below)
    let e = document->Document.createElement("img")
    let maybeImg = HtmlImageElement.ofElement(e)
    let img = Belt.Option.getUnsafe(maybeImg)

    img->HtmlImageElement.setSrc(url)
    img->HtmlImageElement.addLoadEventListener(event => resolve(event))
    img->HtmlImageElement.addErrorEventListener(error => reject(error->Obj.magic))

    let body =
      document
      ->Document.asHtmlDocument
      ->Belt.Option.flatMap(HtmlDocument.body)
      ->Belt.Option.getUnsafe

    body->Element.appendChild(~child=img->HtmlImageElement.asNode)
    body->Element.removeChild(~child=img->HtmlImageElement.asNode)->ignore
  })
}

let test =
  url
  ->processImage
  ->Js.Promise2.then(event => {
    // similar to the above chain, but done all at once without interim variables
    let img =
      event
      ->Event.currentTarget
      ->EventTarget.unsafeAsElement
      ->HtmlImageElement.ofElement
      ->Belt.Option.getUnsafe
    let width = img->HtmlImageElement.naturalWidth
    let height = img->HtmlImageElement.naturalHeight
    Js.log4("width", width, "height", height)
    Js.Promise2.resolve()
  })
