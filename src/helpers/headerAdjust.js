const headerAdjust = () => {
  const htmlStr = `<div class="meal-deal-breadcrumb">
    
    <a href="/pages/build-a-gift"><span> Back</span></a>
  </div>`;

  const breadcrumbContainer = document.querySelector('#Breadcrumbs');
  const backBreadcrumb = document.querySelector('.meal-deal-breadcrumb');

  document.querySelector('.appwrapper').classList.add('giftbuilder');

  if (!document.querySelector('.Layout_Phone #Breadcrumbs')) {
    !backBreadcrumb && (breadcrumbContainer.innerHTML = htmlStr);
    return;
  }

  const mainWrapper = document.getElementById('MainContentWrapper');

  !backBreadcrumb && mainWrapper.insertAdjacentHTML('afterbegin', htmlStr);
};

export default headerAdjust;
