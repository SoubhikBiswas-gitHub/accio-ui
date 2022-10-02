import React from 'react'
import srcPage from './utility/page.png'
function Pages() {
    return (
        <div className="outer">
          <h1 className="header header4">About</h1>
          <hr />
          <div className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
            blanditiis. At laboriosam deleniti ad! Illo voluptatum, rerum dicta
            nesciunt, quas necessitatibus excepturi et non ut, iure modi error
            cumque. Ratione, qui aut ea modi architecto cupiditate voluptatem harum
            adipisci ipsum accusantium itaque. Recusandae deleniti nihil iure optio
            aliquid, architecto obcaecati doloribus in ullam. Rem maxime possimus
            deserunt. Nisi temporibus dolor dolorem id rem alias qui quaerat
            officiis delectus sapiente ex beatae enim quisquam possimus vitae
            adipisci sed repudiandae sit quo ad, consequuntur error doloremque in
            libero? Quasi, vel non magni ratione voluptas, quo magnam sunt impedit
            dolorem ducimus maiores provident?
          </div>
          <div className="pictureBox">
            <img src={srcPage} alt="shop" className="picture" />
          </div>
        </div>
      )
}

export default Pages