import Image from 'next/image';
import StackIcon from 'tech-stack-icons';

const techStack = [
	{ name: 'mongodb', label: 'MongoDB' },
	{ name: 'expressjs', label: 'Express.js' },
	{ name: 'nodejs', label: 'Node.js' },
	{ name: 'react', label: 'React' },
];

const skills = [
	{ name: 'figma', label: 'Figma' },
	{ name: 'photoshop', label: 'Photoshop' },
	{ name: 'lightroom', label: 'Lightroom' },
	{ name: 'premierepro', label: 'Premiere Pro' },
	{ name: 'unity', label: 'Unity' },
];

export default function Home() {
	return (
		<div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
			<main className="display grid items-center justify-center w-full flex-1">
				<div className="grid grid-cols-5 gap-4 max-w-[80vw]">
					<div className="col-span-2 row-span-2 bg-amber-600 rounded-2xl items-center justify-center p-2 display flex flex-col">
						<div>
							<Image
								src={`${process.env.NEXT_PUBLIC_BASE_PATH}/me2.png`}
								alt="Jordyn Bowe"
								loading="eager"
								width={400}
								height={400}
							/>
						</div>
						<div className="text-center p-10 px-8">
							<p className="font-bold text-2xl">Jordyn Bowe</p>
							<p className="text-lg text-stone-700">
								jkbowe@student.fullsail.edu
							</p>
						</div>
					</div>
					<div className="col-span-3 bg-amber-500 rounded-2xl p-8">
						<h2 className="text-2xl font-bold p-2">About Me</h2>
						<p className="indent-4 text-base/8 leading-8 font-medium mb-2">
							Hi, I'm Jordyn Bowe, a web development student at Full Sail
							University with a eye for design and a passion for creating things
							that feel alive. I'm working toward a career as a frontend
							developer, where I can bring together clean code and thoughtful
							visuals to build experiences people actually enjoy using.
						</p>
						<p className="indent-4 text-base/8 leading-8 font-medium mb-2">
							{' '}
							But I've never been the type to stay in just one lane. When I'm
							not deep in a project or learning something new, I'm behind a lens
							as a freelance photographer, finding light, telling stories, and
							seeing the world a little differently than most. That creative
							instinct bleeds into everything I do, from how I approach a layout
							to how I think about the person on the other side of the screen.
						</p>
						<p className="indent-4 text-base/8 leading-8 font-medium">
							I'm a natural experimenter, always picking up new skills and
							pushing what I know a little further. If there's a tool to learn,
							a style to try, or a problem to solve in a fresh way, I'm in.
						</p>
					</div>
					<div className="col-start-3 col-span-3 row-start-2 bg-amber-400 rounded-2xl p-6">
						<div className="m-4">
							<h2 className="text-2xl font-bold p-2">Tech Stack</h2>
							<ul className="flex flex-row justify-evenly">
								{techStack.map(({ name, label }) => (
									<li
										key={name}
										className="flex flex-col items-center gap-2"
									>
										<StackIcon
											name={name}
											className="w-12 h-12"
										/>
										<div className="font-bold">{label}</div>
									</li>
								))}
							</ul>
						</div>
						<div className="m-4">
							<h2 className="text-2xl font-bold p-2">Skills</h2>
							<ul className="flex flex-row justify-evenly">
								{skills.map(({ name, label }) => (
									<li
										key={name}
										className="flex flex-col items-center gap-2"
									>
										<StackIcon
											name={name}
											className="w-12 h-12"
										/>
										<div className="font-bold">{label}</div>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
