import { staticBlocks } from './defines'
/*
* Нижняя часть блока с информацией
*/

const defaultBlock = (name) => {
  const live = (name === 'tele' || name === 'live') ? true : false;
  return (
    <div className="block">
      { live ? <LiveBlock name={`${name}`} /> : 'Данный блок - ' + staticBlocks[name].name }
    </div>
  )
}

function Footer() {
  return (
    <div className="footer">
      <div className="footer_column">
        <FooterBlock
          title={ staticBlocks.weather.name }
          url="#"
          content={defaultBlock(staticBlocks.weather.id)} />
        <FooterBlock
          title={ staticBlocks.visited.name }
          url="#"
          content={defaultBlock(staticBlocks.visited.id)} />
      </div>
      <div className="footer_column">
        <FooterBlock
          title={ staticBlocks.map.name }
          url="#"
          content={defaultBlock(staticBlocks.map.id)} />
        <FooterBlock
          title={ staticBlocks.tele.name }
          url="#"
          content={defaultBlock(staticBlocks.tele.id)} />
      </div>
      <div className="footer_column">
        <FooterBlock
          title={ staticBlocks.live.name }
          url="#"
          content={defaultBlock(staticBlocks.live.id)} />
      </div>
    </div>
  );
}

const FooterBlock = ({title, url, content}) => {
  return (
    <div className="footer_block">
      <a href={url}>{ title }</a>
      { content }
    </div>
  );
}

function LiveBlock({name}) {
  return staticBlocks[name].items.map(o =>
    <div className="ephire">
      { o.time || <img src="https://icon_url" /> } { o.title } { o.context }
    </div>
  )
}

export default Footer;
