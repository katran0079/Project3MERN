import React from "react";

function profile() {
    return (
        <div>
        <nav className="navbar navbar-inverse" id="pink">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">Artist Alley</a>
          </div>
          <ul className="nav navbar-nav">
            <li><a href="#">Cosplayers</a></li>
            <li><a href="#">Artists</a></li>
            <li><a href="#">Photographers</a></li>
            <li><a href="#">Prop Makers</a></li>
            <li><a href="#">Costume Makers</a></li>
          </ul>
        </div>
      </nav>

<div className="container text-center">
<div className="row">
  <div className="col-sm-3 sidenav well">
    <div className="well">
      <p>My Profile</p>
      <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEBAPDxAQDw8QEBASEBIPEBAPEBIPFRIWFhUVExMYHSggGBolGxMVITEhJykrLi4uFx8zODMsNygtLisBCgoKDg0OGhAQGisfHx0tKy0tLS0tLS0tLS0tLSstLS0tLTUtLSstKy0tLS0tLS0tLSstNS0tKy03LS0rLTctLf/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAABAUGAwIBB//EADgQAAIBAQQHBQcDBAMAAAAAAAABAgMEESExBQYSQVFhcSIygZGhE0JSYrHB0XKSsiMzguFjc/H/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAgMBBP/EAB0RAQEBAAMAAwEAAAAAAAAAAAABAhESMQMhQVH/2gAMAwEAAhEDEQA/AP3EAAAAAAAAA4VrTGOGb4L7gdznUrRjm103kGpaZS33LkcSuqeybO2rcm+uBylbJ8l4EcHeI5zXR15v3n9Dz7SXxS/czyDrj17SXxS/cz6q0vifneeAB3ja5ren1R1hbuMfIhg5xHeas4WiL33PngdSnOlOtKOTw4PFHOrvZaAjUrYnhLsv0JJKgAAAAAAAAAAAAAAAA8zmoq9u5HmvWUVjnuRW1Kjk73/pHZHLXavanLBYL1ZHALQAAAAAAAAAAAAAAAAHWjXccsVwZyAFpRrKWWe9bzoVEZNO9YMn2a0qWDwl9ehFipUgAHFAAAAAAAABzr1lFX79yPVSaim3kisq1HJ3v/xHZHLXmcm3e8z4AWgAAAAADzOair5NJLNt3IhaT0nCgru9Ua7MV9ZcEZa2WypVd85X8EsIroipnlOtyNHaNPUY4R2qj+VXR82Q56yPdSXjJv6IoQX1jPvV6tZJb6UfCTJVDWKk+/GcOffXpj6GYA6w71u6FeE1fCSkuTvOhg6NaUHtQk4vijSaJ00ql0Kl0am55Rl+GRc8LzvlcAAlYAAAQAFhZbRtYPvL1JBUJ3YrNFlZ620uazIsVK6gA4oAAAA4WursxwzeCAjWuttO5ZL1ZHANGYAAAAAELStvVCF+c5YQXPi+SJpi9K2t1aspe6uzBcIr85lZnKda4iNVqOUnKTbk3e2zyAaMAAAAAAAAGn0DpP2i9lN/1IrB/FH8ouDB0arhKM4u6UWmjb2WuqkIzWUkn04oz1OG2NcuoAJWAAAe6NTZd/n0PAAt4u/Fbz6Q7BV919UTDOrlAAHQrbVU2pPgsETq89mLfLDqVZWU6AAUkAAAAAQ9L1tihUks7rl1eBjDUazP+iudSK9G/sZc0x4x36AApAAAAAAAAAaXVetfTnD4JXrpL/aZmi71Vfbqr5Ivyf8As5rxWPWkABk3AAAAAHqE7mnwLWLvSa3lQT7DO+N3B+hOlZSQASpE0hLBLjiQiRbZdvokRy54i+gAOuAAAAACp1mjfQv4Ti/qvuZY2uk6HtKNSO9xvXVYr6GKNMeMfk9AAUgAAAAAAAALzVWPbqvhGK82/wAFGajVmhs0nN+/K/wWC+5zXi8ercAGTYAAAAACRYZXSu4ojnqlK6UXzQpFsADNoq7Q75y6nM9Ve9L9UvqeTRmAAAAAAAAGQ03Y/ZVXcuxO+UfuvD7mvI9vska0HCXWL3xlxO5vCdTmMQDrarPKlNwmrmvJrc1yORqwAAAAAAA+xi20km23cks2+CA6WSzupONOOcn5Lezb0aahGMY5RSSIOhtG+xjfLGpLvPgvhRYmery2xngABKwAAAAADAAs/aoEDbBPCuzzV70v1S+p5PddXSl1Z4KSAAAAealRRTlJ3RSvbe5AeivtWmaNPDa23whj65FFpXS0qzcY3xpcMnL9X4K0uY/rO7/jQT1kXu0n4y/BO0fpenV7Pcn8Mt/RmRB3rEzdbe3WKFaOzNZd2S70XyMvb9E1aV7u24fFFX3L5luJGjtOTp3RqX1Ibn768d5obJbKdVX05p8spLqszn3lX1phwbS0aMo1MZU1e98ey/QhT1dpPKU14pne8T0rMA00dXaW+c35IlUND0IY7G0/ne16ZDtDpWXsdhqVndCN63yeEV4mn0ZoqFHHvVGsZPdyjwJlWrCnG+Uowisr2kuiRR6Q1gzjQX+cl/Ffk5zariZ9W1u0hTortvtPKKxk/wAIqlrJ/wAWH6sSgnJttttt5tu9vxPh2ZibutVZ9PUZYS2qb+ZXrzRaRkmk0008mnen4mBJVgt86Lvg+y+9F91/h8zlx/HZ8n9bUHCxWuNWCnDo1vT4M7kNQAAAD4wPewfSb7E+k8q4RbYrpvmkzgTNIR7r8CGdnjl9AAdcDNayW7al7GL7McZ85bl4F9bbQqdOdR+6sObyS82jESk223i272+bLzP1nu/j4AC2QAAATuxWDWTWDAAn0NMV4Ybe0uE1teuZMhrHPfTi+jaKQHOIrtV5LWSe6nHxkyLW05Xlk1D9Kx82VoHWHavVSbk75NyfGTbZ5AOpAAAAAE3RFudGom+5K5TXLc/A2SZgDWavWrbo7L71N7L/AE+6/t4Ebn60xfxZgAhqHqmr2lxaPJ3scb5rliKLEAGbRytUL4visV4FYXBV16ezJrdu6FZTpzABSVHrTWuhCn8UnJ9I5er9DOFrrLUvrXfDBLzxKo1z4w1fsAB1IAAAAAAAAAAAAAAAAAABbatVtms47pxa8VivuVJ30fU2KtOXCcfV3C+Oy8VuAAYvQE6wQwcuOXREFK/BZstqcLklwROncvQAJWEa3U71tLNfQkgCnB1tFLZd255HJGjNi9Lz2q9V/Nd5YEQ62x31Kj+ef8mcjaPPfQABwAAAAAAAAAAAAAAAAAAAX3Y8MQfGBvqcr4p8Un6Ho4WB30qT404fREiEW2ks2YvTEmw073tbll1Jx5pwUUktx6ItXIAA46AADnXpbSu37nzKyUWnc80W5HtNDaxXeXqjsqbH5paO/P8AXL+TOZ3t8HGrUTTTU5YPqcD0vLQABwAAAAAAAAAAAAAAAAAAAAAbbRn9ij/1Q/ii5slDZV7zfoiHoWytUqTmrmqcMHnfcsy0PPqvXmAAJUAAAAAAAAqNPaEjaY7SujViuzLc+UuRhLVZp0pOFSLjJbn9VxR+pELSejKVojs1Fiu7JYSi+TNM74+qz38fP3H5qCy0toSrZ3e1t0904rD/ACW4rTaXl57OPQABwAAAAAAAAAAAAAACVo/R9WvLZpxv4yeEV1YdRoxbaSTbeCSxbZsdXdXfZ3Vq6vnnGGajzfFk7Qugadn7T7dV5ye7lFbi3Mdb5+o3x8fH3QAGbUAAAAAAAAAAAAAfJRTVzV6eaeKM9pTVWnO+VF+yl8OcH4bjRA7LZ45cy+vzS36LrUH/AFINL4ljHzIZ+rSing1euZU23VyzVb3sezlxp9n0yNZ8n9Y34v4/PwaW1aoVF/bqRkuElssrK+gbVDOk3zi1IualZ3Fn4rQdalmqR71Oa6wl+Dk8M8DqQHy86QozeUJvpGT+wHgE6joa0z7tGfVrZXqWdm1SrS78oQX7mcupFTNv4zx2stkqVXs04Sm+SwXVm0seqtnhc57VV/M7o/tRdUqUYLZhFRS3RSSIvyT8aT4r+stozVLKVolf8kH9Zfg1FChCnFRhFRisklcjoDO6ta5zJ4AAlQAAAAAAAAAAAAAAAAAAAAAAADxVyIUwDsTXxEygAdpHUAEqAAAAAAAAAAAAAAAAf//Z" className="img-circle" height={65} width={65} alt="Avatar" />
    </div>
    <div className="well">
      <h3>Latest Update</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </p>
    </div>
    <div className="col-sm-3 sidenav">
      <div className="panel panel-default text-center">
        <img src="data:image/png;base64,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" height={150} width={180} alt="calender" />
      </div>
    </div>
  </div>
  <div className="col-sm-7">
    <div className="row">
      <div className="col-sm-12">
        <div className="panel panel-default text-left">
          <div className="panel-body">
            <p contentEditable="true">Status: Feeling Blue</p>
            <button type="button" className="btn btn-default btn-sm">
              <span className="glyphicon glyphicon-thumbs-up" /> Like
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid text-center" id="back">
      <div className="row">
        <div className="col-sm-3">
          <div className="well">
            <p>John</p>
            <img src="data:image/jpeg;base64,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" className="img-circle avatar" height={55} width={55} alt="Avatar" />
          </div>
        </div>
        <div className="col-sm-9">
          <div className="well">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-3">
          <div className="well">
            <p>Bo</p>
            <img src="data:image/jpeg;base64,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" className="img-circle" height={55} width={55} alt="Avatar" />
          </div>
        </div>
        <div className="col-sm-9">
          <div className="well">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-3">
          <div className="well">
            <p>Jane</p>
            <img src="data:image/jpeg;base64,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" className="img-circle" height={55} width={55} alt="Avatar" />
          </div>
        </div>
        <div className="col-sm-9">
          <div className="well">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-3">
          <div className="well">
            <p>Anja</p>
            <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEBAPDxAQDw8QEBASEBIPEBAPEBIPFRIWFhUVExMYHSggGBolGxMVITEhJykrLi4uFx8zODMsNygtLisBCgoKDg0OGhAQGisfHx0tKy0tLS0tLS0tLS0tLSstLS0tLTUtLSstKy0tLS0tLS0tLSstNS0tKy03LS0rLTctLf/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAABAUGAwIBB//EADgQAAIBAQQHBQcDBAMAAAAAAAABAgMEESExBQYSQVFhcSIygZGhE0JSYrHB0XKSsiMzguFjc/H/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAgMBBP/EAB0RAQEBAAMAAwEAAAAAAAAAAAABAhESMQMhQVH/2gAMAwEAAhEDEQA/AP3EAAAAAAAAA4VrTGOGb4L7gdznUrRjm103kGpaZS33LkcSuqeybO2rcm+uBylbJ8l4EcHeI5zXR15v3n9Dz7SXxS/czyDrj17SXxS/cz6q0vifneeAB3ja5ren1R1hbuMfIhg5xHeas4WiL33PngdSnOlOtKOTw4PFHOrvZaAjUrYnhLsv0JJKgAAAAAAAAAAAAAAAA8zmoq9u5HmvWUVjnuRW1Kjk73/pHZHLXavanLBYL1ZHALQAAAAAAAAAAAAAAAAHWjXccsVwZyAFpRrKWWe9bzoVEZNO9YMn2a0qWDwl9ehFipUgAHFAAAAAAAABzr1lFX79yPVSaim3kisq1HJ3v/xHZHLXmcm3e8z4AWgAAAAADzOair5NJLNt3IhaT0nCgru9Ua7MV9ZcEZa2WypVd85X8EsIroipnlOtyNHaNPUY4R2qj+VXR82Q56yPdSXjJv6IoQX1jPvV6tZJb6UfCTJVDWKk+/GcOffXpj6GYA6w71u6FeE1fCSkuTvOhg6NaUHtQk4vijSaJ00ql0Kl0am55Rl+GRc8LzvlcAAlYAAAQAFhZbRtYPvL1JBUJ3YrNFlZ620uazIsVK6gA4oAAAA4WursxwzeCAjWuttO5ZL1ZHANGYAAAAAELStvVCF+c5YQXPi+SJpi9K2t1aspe6uzBcIr85lZnKda4iNVqOUnKTbk3e2zyAaMAAAAAAAAGn0DpP2i9lN/1IrB/FH8ouDB0arhKM4u6UWmjb2WuqkIzWUkn04oz1OG2NcuoAJWAAAe6NTZd/n0PAAt4u/Fbz6Q7BV919UTDOrlAAHQrbVU2pPgsETq89mLfLDqVZWU6AAUkAAAAAQ9L1tihUks7rl1eBjDUazP+iudSK9G/sZc0x4x36AApAAAAAAAAAaXVetfTnD4JXrpL/aZmi71Vfbqr5Ivyf8As5rxWPWkABk3AAAAAHqE7mnwLWLvSa3lQT7DO+N3B+hOlZSQASpE0hLBLjiQiRbZdvokRy54i+gAOuAAAAACp1mjfQv4Ti/qvuZY2uk6HtKNSO9xvXVYr6GKNMeMfk9AAUgAAAAAAAALzVWPbqvhGK82/wAFGajVmhs0nN+/K/wWC+5zXi8ercAGTYAAAAACRYZXSu4ojnqlK6UXzQpFsADNoq7Q75y6nM9Ve9L9UvqeTRmAAAAAAAAGQ03Y/ZVXcuxO+UfuvD7mvI9vska0HCXWL3xlxO5vCdTmMQDrarPKlNwmrmvJrc1yORqwAAAAAAA+xi20km23cks2+CA6WSzupONOOcn5Lezb0aahGMY5RSSIOhtG+xjfLGpLvPgvhRYmery2xngABKwAAAAADAAs/aoEDbBPCuzzV70v1S+p5PddXSl1Z4KSAAAAealRRTlJ3RSvbe5AeivtWmaNPDa23whj65FFpXS0qzcY3xpcMnL9X4K0uY/rO7/jQT1kXu0n4y/BO0fpenV7Pcn8Mt/RmRB3rEzdbe3WKFaOzNZd2S70XyMvb9E1aV7u24fFFX3L5luJGjtOTp3RqX1Ibn768d5obJbKdVX05p8spLqszn3lX1phwbS0aMo1MZU1e98ey/QhT1dpPKU14pne8T0rMA00dXaW+c35IlUND0IY7G0/ne16ZDtDpWXsdhqVndCN63yeEV4mn0ZoqFHHvVGsZPdyjwJlWrCnG+Uowisr2kuiRR6Q1gzjQX+cl/Ffk5zariZ9W1u0hTortvtPKKxk/wAIqlrJ/wAWH6sSgnJttttt5tu9vxPh2ZibutVZ9PUZYS2qb+ZXrzRaRkmk0008mnen4mBJVgt86Lvg+y+9F91/h8zlx/HZ8n9bUHCxWuNWCnDo1vT4M7kNQAAAD4wPewfSb7E+k8q4RbYrpvmkzgTNIR7r8CGdnjl9AAdcDNayW7al7GL7McZ85bl4F9bbQqdOdR+6sObyS82jESk223i272+bLzP1nu/j4AC2QAAATuxWDWTWDAAn0NMV4Ybe0uE1teuZMhrHPfTi+jaKQHOIrtV5LWSe6nHxkyLW05Xlk1D9Kx82VoHWHavVSbk75NyfGTbZ5AOpAAAAAE3RFudGom+5K5TXLc/A2SZgDWavWrbo7L71N7L/AE+6/t4Ebn60xfxZgAhqHqmr2lxaPJ3scb5rliKLEAGbRytUL4visV4FYXBV16ezJrdu6FZTpzABSVHrTWuhCn8UnJ9I5er9DOFrrLUvrXfDBLzxKo1z4w1fsAB1IAAAAAAAAAAAAAAAAAABbatVtms47pxa8VivuVJ30fU2KtOXCcfV3C+Oy8VuAAYvQE6wQwcuOXREFK/BZstqcLklwROncvQAJWEa3U71tLNfQkgCnB1tFLZd255HJGjNi9Lz2q9V/Nd5YEQ62x31Kj+ef8mcjaPPfQABwAAAAAAAAAAAAAAAAAAAX3Y8MQfGBvqcr4p8Un6Ho4WB30qT404fREiEW2ks2YvTEmw073tbll1Jx5pwUUktx6ItXIAA46AADnXpbSu37nzKyUWnc80W5HtNDaxXeXqjsqbH5paO/P8AXL+TOZ3t8HGrUTTTU5YPqcD0vLQABwAAAAAAAAAAAAAAAAAAAAAbbRn9ij/1Q/ii5slDZV7zfoiHoWytUqTmrmqcMHnfcsy0PPqvXmAAJUAAAAAAAAqNPaEjaY7SujViuzLc+UuRhLVZp0pOFSLjJbn9VxR+pELSejKVojs1Fiu7JYSi+TNM74+qz38fP3H5qCy0toSrZ3e1t0904rD/ACW4rTaXl57OPQABwAAAAAAAAAAAAAACVo/R9WvLZpxv4yeEV1YdRoxbaSTbeCSxbZsdXdXfZ3Vq6vnnGGajzfFk7Qugadn7T7dV5ye7lFbi3Mdb5+o3x8fH3QAGbUAAAAAAAAAAAAAfJRTVzV6eaeKM9pTVWnO+VF+yl8OcH4bjRA7LZ45cy+vzS36LrUH/AFINL4ljHzIZ+rSing1euZU23VyzVb3sezlxp9n0yNZ8n9Y34v4/PwaW1aoVF/bqRkuElssrK+gbVDOk3zi1IualZ3Fn4rQdalmqR71Oa6wl+Dk8M8DqQHy86QozeUJvpGT+wHgE6joa0z7tGfVrZXqWdm1SrS78oQX7mcupFTNv4zx2stkqVXs04Sm+SwXVm0seqtnhc57VV/M7o/tRdUqUYLZhFRS3RSSIvyT8aT4r+stozVLKVolf8kH9Zfg1FChCnFRhFRisklcjoDO6ta5zJ4AAlQAAAAAAAAAAAAAAAAAAAAAAADxVyIUwDsTXxEygAdpHUAEqAAAAAAAAAAAAAAAAf//Z" className="img-circle" height={55} width={55} alt="Avatar" />
          </div>
        </div>
        <div className="col-sm-9">
          <div className="well">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="col-sm-2 sidenav well">
    <div className="thumbnail">
      <table className="table">
        <thead>
          <tr>
            <th scope="col-sm-2 sidenav">Your Appointments</th>
            <th />
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{width: '90%'}}>blank</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
</div>
</div>
    );
                
                };



export default profile;