const cloudinary = require("cloudinary").v2; //! Cloudinary is being required

exports.cloudinaryConnect = () => {
	try {
		cloudinary.config({
			//!    ########   Configuring the Cloudinary to Upload MEDIA ########
			cloud_name: "djkytotpn",
			api_key: "621435523764895",
			api_secret: "UU0kuj6o5aTTj7Az8lt2IP-gZm4",
		});
	} catch (error) {
		console.log(error);
	}
};
