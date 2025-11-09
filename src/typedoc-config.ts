/**
 * TypeDoc configuration
 *
 * @see https://typedoc.org/options/
 */
export interface TypeDocConfiguration {
    /**
     * Specifies the entry points to be documented by TypeDoc.
     *
     * @see https://typedoc.org/options/input/#entrypoints
     */
    readonly entryPoints?: string[];

    /**
     * Specifies the strategy to be used to convert entry points into documentation.
     *
     * @see https://typedoc.org/options/input/#entrypointstrategy
     */
    readonly entryPointStrategy?: EntryPointStrategy;

    /**
     * Define patterns to be excluded when expanding directories.
     *
     * @see https://typedoc.org/options/input/#exclude
     */
    readonly exclude?: string[];

    /**
     * Prevent externally resolved symbols from being documented.
     *
     * @see https://typedoc.org/options/input/#excludeexternals
     */
    readonly excludeExternals?: boolean;

    /**
     * Prevent private members from being included in the generated documentation.
     *
     * @see https://typedoc.org/options/input/#excludeprivate
     */
    readonly excludePrivate?: boolean;

    /**
     * Prevent protected members from being included in the generated documentation.
     *
     * @see https://typedoc.org/options/input/#excludeprotected
     */
    readonly excludeProtected?: boolean;

    /**
     * Prevent symbols that are not exported from being documented.
     *
     * @see https://typedoc.org/options/input/#excludeinternal
     */
    readonly excludeInternal?: boolean;

    /**
     * Specifies the output directory the documentation should be written to.
     *
     * @see https://typedoc.org/options/output/#out
     */
    readonly out?: string;

    /**
     * Specify the location the documentation should be written to.
     *
     * @see https://typedoc.org/options/output/#json
     */
    readonly json?: string;

    /**
     * Specify a theme name to use.
     *
     * @see https://typedoc.org/options/output/#theme
     */
    readonly theme?: string;

    /**
     * Specify the base path for all urls.
     *
     * @see https://typedoc.org/options/output/#basepath
     */
    readonly basePath?: string;

    /**
     * Set the name of the project that will be used in the header of the template.
     *
     * @see https://typedoc.org/options/output/#name
     */
    readonly name?: string;

    /**
     * Prevent TypeDoc from cleaning the output directory specified with --out.
     *
     * @see https://typedoc.org/options/output/#cleanoutputdir
     */
    readonly cleanOutputDir?: boolean;

    /**
     * Specify the location to look for included documents.
     *
     * @see https://typedoc.org/options/output/#includes
     */
    readonly includes?: string;

    /**
     * Specify the location with media files that should be copied to the output directory.
     *
     * @see https://typedoc.org/options/output/#media
     */
    readonly media?: string;

    /**
     * Specify the location and filename a .tsbuildinfo file should be written to.
     *
     * @see https://typedoc.org/options/input/#tsbuildinfo
     */
    readonly tsBuildInfo?: string;

    /**
     * Specify a TypeScript config file that should be used to load TypeScript configuration.
     *
     * @see https://typedoc.org/options/input/#tsconfig
     */
    readonly tsconfig?: string;

    /**
     * Specify the logger that should be used.
     *
     * @see https://typedoc.org/options/other/#loglevel
     */
    readonly logLevel?: LogLevel;

    /**
     * Specify the sort strategy for documented values.
     *
     * @see https://typedoc.org/options/organization/#sort
     */
    readonly sort?: string[];

    /**
     * Specify the sort strategy for static and instance members.
     *
     * @see https://typedoc.org/options/organization/#sortentrypoints
     */
    readonly sortEntryPoints?: boolean;

    /**
     * Specify the documentation mode TypeDoc should use.
     *
     * @see https://typedoc.org/options/comments/#commentstyle
     */
    readonly commentStyle?: CommentStyle;

    /**
     * Specify the default visibility for members without a visibility tag.
     *
     * @see https://typedoc.org/options/comments/#defaultvisibility
     */
    readonly defaultVisibility?: Visibility;

    /**
     * Specify the default category for reflections without a category.
     *
     * @see https://typedoc.org/options/organization/#defaultcategory
     */
    readonly defaultCategory?: string;

    /**
     * Specify the default group for reflections without a group.
     *
     * @see https://typedoc.org/options/organization/#defaultgroup
     */
    readonly defaultGroup?: string;

    /**
     * Specify the categories that will be used to group reflections.
     *
     * @see https://typedoc.org/options/organization/#categorizebygroup
     */
    readonly categorizeByGroup?: boolean;

    /**
     * Specify the search group boosts.
     *
     * @see https://typedoc.org/options/organization/#searchgroupboosts
     */
    readonly searchGroupBoosts?: Record<string, number>;

    /**
     * Specify the search category boosts.
     *
     * @see https://typedoc.org/options/organization/#searchcategoryboosts
     */
    readonly searchCategoryBoosts?: Record<string, number>;

    /**
     * Specify the readme file that should be displayed on the index page.
     *
     * @see https://typedoc.org/options/input/#readme
     */
    readonly readme?: string;

    /**
     * Specify the package.json file that should be used to determine the package name.
     *
     * @see https://typedoc.org/options/input/#packagejson
     */
    readonly packageJson?: string;

    /**
     * Specify the git revision that should be used to link to source files.
     *
     * @see https://typedoc.org/options/comments/#gitrevision
     */
    readonly gitRevision?: string;

    /**
     * Specify the git remote that should be used to link to source files.
     *
     * @see https://typedoc.org/options/comments/#gitremote
     */
    readonly gitRemote?: string;

    /**
     * Specify the base URL for links to source files.
     *
     * @see https://typedoc.org/options/comments/#sourceurltemplate
     */
    readonly sourceUrlTemplate?: string;

    /**
     * Specify the base URL for links to source files.
     *
     * @see https://typedoc.org/options/comments/#sourceurltemplate
     */
    readonly disableSources?: boolean;

    /**
     * Specify the base URL for links to source files.
     *
     * @see https://typedoc.org/options/comments/#sourceurltemplate
     */
    readonly disableGit?: boolean;

    /**
     * Specify the base URL for links to source files.
     *
     * @see https://typedoc.org/options/comments/#sourceurltemplate
     */
    readonly hideGenerator?: boolean;

    /**
     * Specify the base URL for links to source files.
     *
     * @see https://typedoc.org/options/comments/#sourceurltemplate
     */
    readonly hideParameterTypesInTitle?: boolean;

    /**
     * Specify the base URL for links to source files.
     *
     * @see https://typedoc.org/options/comments/#sourceurltemplate
     */
    readonly cacheBust?: boolean;

    /**
     * Specify the base URL for links to source files.
     *
     * @see https://typedoc.org/options/comments/#sourceurltemplate
     */
    readonly searchInComments?: boolean;

    /**
     * Specify the base URL for links to source files.
     *
     * @see https://typedoc.org/options/comments/#sourceurltemplate
     */
    readonly searchInDocuments?: boolean;

    /**
     * Specify the base URL for links to source files.
     *
     * @see https://typedoc.org/options/comments/#sourceurltemplate
     */
    readonly validation?: ValidationOptions;

    /**
     * Specify the base URL for links to source files.
     *
     * @see https://typedoc.org/options/comments/#sourceurltemplate
     */
    readonly requiredToBeDocumented?: string[];

    /**
     * Specify the base URL for links to source files.
     *
     * @see https://typedoc.org/options/comments/#sourceurltemplate
     */
    readonly treatWarningsAsErrors?: boolean;

    /**
     * Specify the base URL for links to source files.
     *
     * @see https://typedoc.org/options/comments/#sourceurltemplate
     */
    readonly treatValidationWarningsAsErrors?: boolean;

    /**
     * Specify the base URL for links to source files.
     *
     * @see https://typedoc.org/options/comments/#sourceurltemplate
     */
    readonly intentionallyNotExported?: string[];

    /**
     * Specify the base URL for links to source files.
     *
     * @see https://typedoc.org/options/comments/#sourceurltemplate
     */
    readonly externalPattern?: string[];

    /**
     * Specify the base URL for links to source files.
     *
     * @see https://typedoc.org/options/comments/#sourceurltemplate
     */
    readonly externalSymbolLinkMappings?: Record<string, Record<string, string>>;
}

/**
 * Converts TypeDocConfiguration to JSON representation
 * @internal
 */
export function toJson_TypeDocConfiguration(
    obj: TypeDocConfiguration | undefined,
): Record<string, unknown> | undefined {
    if (obj === undefined) {
        return undefined;
    }
    const result: Record<string, unknown> = {
        entryPoints: obj.entryPoints,
        entryPointStrategy: obj.entryPointStrategy,
        exclude: obj.exclude,
        excludeExternals: obj.excludeExternals,
        excludePrivate: obj.excludePrivate,
        excludeProtected: obj.excludeProtected,
        excludeInternal: obj.excludeInternal,
        out: obj.out,
        json: obj.json,
        theme: obj.theme,
        basePath: obj.basePath,
        name: obj.name,
        cleanOutputDir: obj.cleanOutputDir,
        includes: obj.includes,
        media: obj.media,
        tsBuildInfo: obj.tsBuildInfo,
        tsconfig: obj.tsconfig,
        logLevel: obj.logLevel,
        sort: obj.sort,
        sortEntryPoints: obj.sortEntryPoints,
        commentStyle: obj.commentStyle,
        defaultVisibility: obj.defaultVisibility,
        defaultCategory: obj.defaultCategory,
        defaultGroup: obj.defaultGroup,
        categorizeByGroup: obj.categorizeByGroup,
        searchGroupBoosts: obj.searchGroupBoosts,
        searchCategoryBoosts: obj.searchCategoryBoosts,
        readme: obj.readme,
        packageJson: obj.packageJson,
        gitRevision: obj.gitRevision,
        gitRemote: obj.gitRemote,
        sourceUrlTemplate: obj.sourceUrlTemplate,
        disableSources: obj.disableSources,
        disableGit: obj.disableGit,
        hideGenerator: obj.hideGenerator,
        hideParameterTypesInTitle: obj.hideParameterTypesInTitle,
        cacheBust: obj.cacheBust,
        searchInComments: obj.searchInComments,
        searchInDocuments: obj.searchInDocuments,
        validation: obj.validation,
        requiredToBeDocumented: obj.requiredToBeDocumented,
        treatWarningsAsErrors: obj.treatWarningsAsErrors,
        treatValidationWarningsAsErrors: obj.treatValidationWarningsAsErrors,
        intentionallyNotExported: obj.intentionallyNotExported,
        externalPattern: obj.externalPattern,
        externalSymbolLinkMappings: obj.externalSymbolLinkMappings,
    };
    const filtered: Record<string, unknown> = {};
    for (const [key, value] of Object.entries(result)) {
        if (value !== undefined) {
            filtered[key] = value;
        }
    }
    return filtered;
}

/**
 * Specifies the strategy to be used to convert entry points into documentation
 *
 * @see https://typedoc.org/options/input/#entrypointstrategy
 */
export enum EntryPointStrategy {
    /**
     * Expects all entry points to be contained within a single package
     */
    RESOLVE = "resolve",
    /**
     * Expects all entry points to be top-level directories
     */
    EXPAND = "expand",
    /**
     * Expects all entry points to be individual files
     */
    PACKAGES = "packages",
    /**
     * Merges multiple projects into a single documentation site
     */
    MERGE = "merge",
}

/**
 * Specifies the logger that should be used
 *
 * @see https://typedoc.org/options/other/#loglevel
 */
export enum LogLevel {
    VERBOSE = "Verbose",
    INFO = "Info",
    WARN = "Warn",
    ERROR = "Error",
    NONE = "None",
}

/**
 * Specifies the documentation mode TypeDoc should use
 *
 * @see https://typedoc.org/options/comments/#commentstyle
 */
export enum CommentStyle {
    JSDOC = "jsdoc",
    BLOCK = "block",
    LINE = "line",
    ALL = "all",
}

/**
 * Specifies the default visibility for members without a visibility tag
 *
 * @see https://typedoc.org/options/comments/#defaultvisibility
 */
export enum Visibility {
    PUBLIC = "public",
    PROTECTED = "protected",
    PRIVATE = "private",
}

/**
 * Validation options
 *
 * @see https://typedoc.org/options/validation/
 */
export interface ValidationOptions {
    /**
     * If set, TypeDoc will produce warnings when a symbol is referenced by the documentation
     */
    readonly notExported?: boolean;
    /**
     * If set, TypeDoc will produce warnings when an exported symbol is not documented
     */
    readonly notDocumented?: boolean;
    /**
     * If set, TypeDoc will produce warnings about \@link tags which will produce broken links
     */
    readonly invalidLink?: boolean;
}
