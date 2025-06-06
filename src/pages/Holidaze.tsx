import ProjectPage from '../components/ProjectPage/ProjectPage';

const Holidaze = () => {
  return (
    <ProjectPage
      title="Holidaze"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultricies ligula sed magna dictum porta. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Proin eget tortor risus."
      imageUrl="/images/placeholder.jpg"
      imageCaption="Holidaze - Holiday Booking Platform"
      liveLink="https://holidazetravel.netlify.app/"
      githubLink="https://github.com/omro0107/Holidaze/blob/main/README.md"
      content={`
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Sed porttitor lectus nibh.

        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi.

        Pellentesque in ipsum id orci porta dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Quisque velit nisi, pretium ut lacinia in, elementum id enim.

        Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur aliquet quam id dui posuere blandit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec rutrum congue leo eget malesuada.
      `}
    />
  );
};

export default Holidaze;
