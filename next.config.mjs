/** @type {import('next').NextConfig} */
const nextConfig = {
  //when use Image component and it is getting 
  // images from cloudinary outside of applications
  //it is necessary to unlock the access to the address

  images: {
    remotePatterns: [{hostname: 'res.cloudinary.com'}]
  }
};

export default nextConfig;
