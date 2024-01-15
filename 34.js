$(function() {

  const useFieldIds = [
    'issue_subject',
    "textarea.wiki-edit",
  ];

  const addLink = $('#issue_tree a[href*="/issues/new"]')[0]; 

  for (let i = 0; i < useFieldIds.length; i++) {
    const field = $('#' + useFieldIds[i]);
    if (field.val() != null) {
      addLink.href += '&' + encodeURIComponent(field.attr('name'))  + '=' + encodeURIComponent(field.val());
    }
  }
})