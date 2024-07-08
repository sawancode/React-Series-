import React from 'react'

function Card({username, age, position}) {

  console.log(username, age, position);

  return (
    <>
      <section class="px-2 py-10 md:px-0">
        <div class="mx-auto max-w-4xl">
          <div class="md:flex md:items-center md:justify-center md:space-x-14">
            <div class="relative h-48 w-48 flex-shrink-0">
              <img
                class="relative h-48 w-48 rounded-full object-cover"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
                alt=""
              />
            </div>
            <div class="mt-10 md:mt-0">
              <blockquote>
                <p class="text-xl text-black">
                  “Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
                  aliquam repellat laborum minima tempore deserunt explicabo placeat!
                  Fugit, molestias nesciunt.”
                </p>
              </blockquote>
              <p class="mt-7 text-lg font-semibold text-black">John Doe {age}</p>
              <p class="mt-1 text-base text-gray-600"> Role: {position}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Card
