document.addEventListener('niviteLoaded', (event) => {
  dated = (input, from) => {
    if (input) {
      const t = new Date(input);
      if (from) {
        const f = new Date(from);
        if (f.getDate() === t.getDate()
          && f.getMonth() === t.getMonth()) {
          return ' - to - ' + t.toLocaleTimeString();
        }
      }
      return t.toLocaleString();
    }
  }
  img = (pIndx) => {
    const photo = invite.photos[pIndx];
    return '<img id="photo' + (pIndx) + '" src="' + photo.url + '" title="' + photo.title + '" class="img-fluid rounded shadow-lg' + (pIndx === 0 ? '' : 'd-none') + '" alt="' + (photo.description ? photo.description : photo.title) + '" data-tags="' + photo.tags + '">';
  }

  const invite = event.detail;
  $('#title').html(invite.title);
  $('#shortMsg').html(invite.shortMsg);
  $('#longMsg').html(invite.longMsg);
  $('#addrName').html(invite.addrName);
  $('#addrText').html(invite.addrText);
  $('#timeFrom').html(dated(invite.timeFrom));
  $('#timeTo').html(dated(invite.timeTo, invite.timeFrom));
  if (invite.photos) {
    $('#photos').append(img(0));
  }
});
