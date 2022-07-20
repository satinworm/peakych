import React from "react";

const HeaderItem = React.memo(function HeaderItem({ title, Icon }) {
   return (
      <div className="mx-1 flex flex-col items-center cursor-pointer w-12 group sm:w-20 hover:text-white ">
         <Icon className="h-8 mb-1  group-hover:animate-bounce customTransition" />
         <p className="customTransition opacity-0 group-hover:opacity-100 tracking-widest">
            {title}
         </p>
      </div>
   );
});
export default HeaderItem;
