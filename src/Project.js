import { Disclosure, Transition } from "@headlessui/react";
import { ReactComponent as Arrow } from "./arrow.svg";

export default function Project(props) {
  return (
    <article style={{ boxShadow: "5px 5px 10px #bebebe,-5px -5px 10px #ffffff", borderRadius: "5px", minWidth: "350px" }}>
      {props.isFetched === true ? (
        <div>
          <a target="blank_" href={props.link}>
            <div className="go_to_page" style={{ overflowY: "hidden", maxWidth: "500px" }}>
              <img style={{ borderRadius: "5px 5px 0px 0px", objectFit: "cover" }} src={"/img/" + props.img + ".png"} alt={props.img} />
            </div>
          </a>
          <h2 style={{ padding: "0px 10px" }}>{props.title}</h2>
          <h3 style={{ padding: "0px 0px 15px 15px" }}>{props.subtitle}</h3>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button style={{ width: "96%", margin: "2% 2%" }}>
                  <div className="disclosure">
                    <h3>Learn more.</h3>
                    <Arrow className={`${open ? "transform rotate-180" : ""}`} />
                  </div>
                  {/*
              Use the `open` render prop to rotate the icon when the panel is open
            */}
                </Disclosure.Button>
                <Transition
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Disclosure.Panel style={{ paddingLeft: "1rem", paddingBottom: "1rem", width: "350px" }}>
                    <p>{props.desc}</p>
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
        </div>
      ) : (
        <h1>sdf</h1>
      )}
    </article>
  );
}
