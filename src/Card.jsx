/** @jsxImportSource @emotion/react */
import "twin.macro";

const Card = () => (
  <div tw="shadow-lg md:flex bg-white rounded-lg p-6 leading-normal">
    {/* <img tw="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6" src="avatar.jpg" /> */}
    <div tw="text-center md:text-left">
      <h1 tw="text-lg">Erin Lindford</h1>
      <h2 tw="text-purple-500">Customer Support</h2>
      <p tw="text-gray-600">erinlindford@example.com</p>
      <p tw="text-gray-600">(555) 765-4321</p>
    </div>
  </div>
)

export default Card;