"use client";

const Map = () => {
  return (
    <div className="w-full h-[50vh]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1985.5126969003288!2d-0.20440511405466638!3d5.563254068848121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9a76309f9c37%3A0xb450873ecf547576!2sGreater%20Accra%20Regional%20Hospital!5e0!3m2!1sen!2sgh!4v1740851645048!5m2!1sen!2sgh"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default Map;
