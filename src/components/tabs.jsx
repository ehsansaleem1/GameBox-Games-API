import {Link, Outlet} from 'react-router-dom'

export default function Tabs(props) {
  return(
    <div className="tabs">
      {props.genres.items.map((item) => {
        var link = `genre=${item.slug}`
        return(
          <Link key={item.slug} to={link} replace><button key={item.name} onClick={() => changeQuery(item.name)} className='btn-categ'>{item.name}</button></Link>
        )
        })}
      <Outlet />
    </div>
  )
}