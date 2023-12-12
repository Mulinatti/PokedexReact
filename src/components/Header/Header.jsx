import React from 'react'
import ButtonPage from "../ButtonPage/ButtonPage"

const Header = ({ page, getPage }) => {
  return (
    <header className="flex justify-center p-2">
      <div className="flex justify-between w-[100px]">
          <ButtonPage
            pagination={() => {
              getPage(page - 24);
            }}
          >
            <i className="fa-solid fa-chevron-left"></i>
          </ButtonPage>
          <ButtonPage
            pagination={() => {
              getPage(page + 24);
            }}
          >
            <i className="fa-solid fa-chevron-right"></i>
          </ButtonPage>
        </div>
    </header>
  )
}

export default Header